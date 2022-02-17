package javascriptParser;

public class Main {

    static String path="prototyping/Page2.js";

    public static void main(String[] args){
        Parser p = new Parser(path);
        p.parse();
        Function f = new Function();
        f.changeName("rerender");
        f.addBody("document.getElementById('knas').outerHtml = '<div>what</div>'");
        p.currentClass.addFunction(f);
        Function constructor = p.currentClass.getFunction("constructor");
        constructor.addBody("this.children[0]='what'");

        System.out.println(p.currentClass.getComponent());
    }

}
