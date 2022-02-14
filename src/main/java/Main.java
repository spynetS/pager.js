
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import java.io.*;
import java.util.ArrayList;


public class Main {

    public static void main(String[] args){
        try {
            readHTML();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void parseHTML(String html, String path){

    }

    public static void readHTML() throws Exception {
        File input = new File("tet.html");
        Document doc = Jsoup.parse(input, "UTF-8", "http://example.com/");
        Element pag = doc.getElementById("but");
        pag.attr("onclick","knas");
        System.out.println(pag);

    }


}
