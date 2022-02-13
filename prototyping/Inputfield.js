class Inputfield{
    constructor(props){
        this.props = props;
        this.name = "knas";
    }
    ee()
    {
        console.log("awa");
        this.name = "wa";
    }
    render(){
        console.log("input render")
        return("<div><input></input><button onclick='(function(e){"+this.props.path+".ee()})(event);app.render({name:"+'"'+"alfred"+'"'+"});' >"+this.name+"</button></div>")
    }

}