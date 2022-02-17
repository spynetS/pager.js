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
"<div><label id=label >test</label><input onkeydown="+this.props.path+".update() placeholder="+this.name+"></div>");
    }

}
