package javascriptParser;

public class Element {

    private String content = ""; //code

    public void addContent(String content){
        this.content+="\n"+content;
    }
    public void removeContent(String content){
        this.content.replace(content,"");
    }
    public String getContent(){
        return content;
    }


}
