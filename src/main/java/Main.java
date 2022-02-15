
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import java.io.*;
import java.util.ArrayList;


public class Main {

    public static void main(String[] args){
        try {
            parseHTML("","app.child.child[0]");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static String parseHTML(String html, String path)throws Exception {
        File input = new File("tet.html");
        Document doc = Jsoup.parse(input, "UTF-8", "http://example.com/");
        Element pag = doc.getElementById("main");
        //pag.attr("onclick","knas");
        String p = "";
        for(Element e : pag.children()){
            if(e.hasAttr("onclick")) {
                e.attr("onclick","'+this.props.path+'"+e.attributes().get("onclick").replace("this","")+";'+this.props.path+'.rerender()'+'");
            }
            p+=e;
        }
        System.out.println("return('"+p.replace("\n","")+"');");
        return "";
    }

    public static void readHTML() {
        ArrayList<String> lines = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader("tet.html"))) {
            String line;
            while ((line = br.readLine()) != null) {
                if(line.contains("<")){
                }
                lines.add(line);
            }
        } catch (Exception e){
            e.printStackTrace();
        }
    }

}
