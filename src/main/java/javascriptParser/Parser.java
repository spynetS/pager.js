package javascriptParser;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Scanner;
import java.util.function.Consumer;

public class Parser {
    private String path = "";
    public Component currentClass;

    public Parser(String path) {
        this.path = path;
    }

    private String nextLine(Scanner scanner){
        return scanner.nextLine();
    }

    private void addFunctionToCurrentClass(String functionLine,Scanner currentScanner){
        Function newFunction = new Function();
        newFunction.changeName(functionLine.substring(0,functionLine.indexOf("(")).replace(" ",""));
        String body = "";
        int count = 0; // to see if the curly bracket belongs to the function
        while (currentScanner.hasNextLine()) {
            String data = currentScanner.nextLine();
            if(data.contains("{")){
                count++;
            }
            if(data.contains("}")&&count<=0) {
                break;
            }
            else{
                count-=1;
            }
            body+=data+"\n";
        }
        newFunction.addBody(body);
        currentClass.addFunction(newFunction);
    }

    public void parse() {
        try {
            File myObj = new File(this.path);
            Scanner myReader = new Scanner(myObj);

            boolean isInClass = false;
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();

                if(data.contains("class")){
                    Component classComp =new Component();
                    currentClass = classComp;
                    isInClass = true;
                }
                if(isInClass){
                    if(data.contains("(")&&data.contains(")")){
                        String nextLine = this.nextLine(myReader); // so we don't increase next loop
                        if(nextLine.contains("{")){
                            //it is a function bro
                            addFunctionToCurrentClass(data,myReader);
                        }
                        else if(data.contains("{")){
                            //here to
                            addFunctionToCurrentClass(data,myReader);
                        }
                    }
                }
            }

            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
       currentClass.getContent();
    }


}
