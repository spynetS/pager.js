
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.json.simple.JSONObject;
import org.jsoup.Jsoup;
import org.jsoup.nodes.*;
import org.jsoup.nodes.Element;
import org.jsoup.parser.ParseSettings;
import org.jsoup.parser.Parser;

import JscriptParser.*;

import java.io.*;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Main {

    public static String[] keys = new String[]{"onclick","placeholder"};
    public static ArrayList<String> components = new ArrayList<>();
    public static ArrayList<Element> children = new ArrayList<>();
    public static String html = "";
    //public static String filePath = "prototyping/Page2.js";
    //public static String compilePath = "prototyping/Page2Compiled.js";
    public static String filePath = "prototyping/Inputfield.js";
    public static String compilePath = "prototyping/InputfieldCompiled.js";

    public static void main(String[] args){
        try {
            readFile();
            html = parseHTML();
            setChildren();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public static Element getParsedAttributes(Element element) {
        Element newEl = element;
        for (Attribute a : element.attributes()){
            if (a.getValue().contains("{") && a.getValue().contains("}")) {
                String value = a.getValue();
                value = value.replace("this", "this.props.path");
                value = value.replace("{", "+");
                value = value.replace("}", "+");
                newEl.attr(a.getKey(),value);
            }
        }
        return newEl;
    }

    public static String parseHTML()throws Exception {
        String elements = "";
        File input = new File(filePath);
        Parser parser = Parser.htmlParser();
        parser.settings(new ParseSettings(true, true)); // tag, attribute preserve case
        Document doc = parser.parseInput(Files.readAllLines(input.toPath()).toString(), "http://example.com/");
        Element pag = doc.getElementById("main");
        for(Element element : pag.children()){
            String elementString = element.toString();
            //check for compnents
            for(String comp : components){
                if(element.tag().getName().equals(comp)){

                    elementString = "\"+this.children["+children.size()+"].render()+\"";
                    children.add(element);
                }
            }
            elementString = getParsedAttributes(element).toString();
            elements += elementString;
        }

        System.out.println("\"<div>"+ elements+"</div>\"");
        return "\"<div>"+ elements+"</div>\"";
    }

    public static void readFile() {
        ArrayList<String> lines = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = br.readLine()) != null) {
                if(line.contains("import")){
                    components.add(line.split(" ")[1]);
                    line = "";
                }
                lines.add(line);
            }
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    public static String getChild(Element child,int index) throws JsonProcessingException {
        HashMap<String,String> props = new HashMap<String, String>();
        props.put("path","this.props.path.child["+index+"]");

        for(int i = 0;i<child.attributesSize();i++){
            Attribute attribute = child.attributes().asList().get(i);
            //.replace("{","+").replace("}","+")
            props.put(attribute.getKey(),attribute.getValue());
        }

        ObjectMapper objectMapper = new ObjectMapper();

        String json = objectMapper.writeValueAsString(props);

        return "new "+child.tagName()+"("+json+");";

    }

    public static void setChildren(){
        ArrayList<String> lines = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String line;
            boolean haschildren = false;
            boolean remove = false;
            while ((line = br.readLine()) != null) {
                if(!remove&&!line.contains("import"))
                    lines.add(line);


                if(line.contains("this.props = props;")){
                    for(int i = 0; i<children.size();i++){
                       // String child = children.get(i);
                        if(!haschildren) {
                            lines.add("this.children=[];");
                            haschildren = true;
                        }
                        lines.add("this.children["+i+"] = "+getChild(children.get(i),i));
                       // lines.add("this.children["+i+"] = new "+ child+"({path:this.props.path+\"child["+i+"]\"})");
                    }
                }
                if(line.contains("return")){
                    remove = true;
                }
                if(line.contains(";"))
                {
                    if(remove){
                        lines.add(html+");");
                    }
                    remove = false;
                }

            }
            BufferedWriter writer = new BufferedWriter(new FileWriter(compilePath));
            for(String line1 : lines){
                writer.write(line1+"\n");
            }
            writer.close();
        } catch (Exception e){
            e.printStackTrace();
        }
    }

}

