class Inputfield{
    constructor(props){
        this.props = props;
        this.name = "what"
        console.log(this.props.name);
        if(this.props.name == "alfred"){
            this.name = this.props.name;
        }
    }
    update(){
        console.log("asdasd")
    }

    render(){

        return(
"<div><label>test</label><input onkeydown="+this.props.path.update()+" placeholder="+this.props.path.name+"></div>");
    }

}
/*
class Inputfield{
    constructor(props){
        this.props = props;
    }
    ee(e)
    {
        console.log(this.name)
        this.name += e;
    }
    rerender(){
        console.log(this.props.test);
        
    }
    render(){
        console.log(this.props.test);

        return "<div><input placeholder="+this.props.test+" ></input></div>"
"<div><label>test</label><input onkeydown="+this.props.path.update()+" placeholder="+this.props.path.name+"></div>");
    }

}*/
