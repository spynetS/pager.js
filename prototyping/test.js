class Test{
    constructor(props){
        this.props = props;
        this.name = "knas";
    }
    ee(){
        this.props.name="clicked me lol";
    }
    render(){
        return("<div><label onclick='(function(e){"+this.props.path+".ee()})(event);app.render({name:"+'"'+"alfred"+'"'+"});' >"+this.props.name+"</label></div>")
    }

}