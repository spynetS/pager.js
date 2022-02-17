package javascriptParser;

public class Function{
    private String body = ""; //code
    private String name="";//function name

    public void changeName(String name){
       this.name = name;
    }
    public String getName(){
        return this.name;
    }
    public void addBody(String content){
        this.body+="\n"+content;
    }
    public void removeBody(String body){
        this.body.replace(body,"");
    }

    public String getBody(){
        return body;
    }
    public String getFunction(){
        String func = this.name+"(){";
        func = func+"\t"+getBody();
        func = func+"}";
        return func;
    }

    @Override
    public String toString() {
        return "Function{"+name+"}";
    }
}
