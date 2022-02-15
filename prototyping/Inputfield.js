class Inputfield{
    constructor(props){
        this.props = props;
        this.name = "";
        this.but = "";
    }
    update(e)
    {
        console.log(this.name)
        this.name += e;
    }
    rerender(){
        console.log("what");
        
    }
    render(){
        //save every component inside as a seperate string
        //then when a component data has changed we reload that string
        console.log("input render")
        this.but = "<button id=\'"+this.props.path+"but"+"\' onclick='(function(e){"+this.props.path+".ee()})(event);app.render();' >"+this.name+"</button>"
        return('<button onclick="'+this.props.path+'.update();'+this.props.path+'.rerender()'+'"></button><button onclick="'+this.props.path+'.update2();'+this.props.path+'.rerender()'+'"></button><div> <label></label> </div><div>  <div> <label></label>  </div> </div>');
    }

}