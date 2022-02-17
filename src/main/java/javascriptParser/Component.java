package javascriptParser;

import java.util.LinkedList;

public class Component{

    private LinkedList<Function> functions = new LinkedList<>();
    private String componentName = "Page2";
    public Function getFunction(String functionName){
        for(Function function:functions){
            if(function.getName().equals(functionName)){
                return function;
            }
        }
        return null;
    }
    public void addFunction(Function function){
        functions.add(function);
    }
    public void removeFunction(Function function){
        this.functions.remove(function);
    }

    public String getContent(){
        String body = "";
        for(Function function : functions){
            body += function.getFunction();
        }
        return body;
    }

    public String getComponent(){
        String component="class "+componentName+"{\n";
        component += getContent();
        component+="}";
        return component;
    }

}
