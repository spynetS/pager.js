class Inputfield{
    constructor(props){
        this.props = props;
        this.name = "";
        this.but = "";
    }
    ee(e)
    {
        console.log(this.name)
        this.name += e;
    }
    rerender(){
        console.log("what");
        this.but = "<button id=\'"+this.props.path+"but"+"\' onclick='(function(e){"+this.props.path+".ee()})(event);app.render();' >"+this.name+"</button>"
        const myAnchor = document.getElementById(this.props.path+"but");
        myAnchor.outerHTML = this.but;
        
    }
    render(){
        //save every component inside as a seperate string
        //then when a component data has changed we reload that string
        console.log("input render")
        this.but = "<button id=\'"+this.props.path+"but"+"\' onclick='(function(e){"+this.props.path+".ee()})(event);app.render();' >"+this.name+"</button>"
        return("<div ><input type='text' onkeydown='"+this.props.path+".ee(event.key);"+this.props.path+".rerender()' ></input>"+this.but+"</div>")
    }

}