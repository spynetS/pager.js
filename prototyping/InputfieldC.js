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
        console.log(this.name)
        this.name = "knas";
        //this.rerender();
        
    }

rerender(){

document.getElementById(this.props.path+".id").outerHTML = ('<div id="'+this.props.path+'.id" ><label>'+this.name+'</label><input onkeydown="'+this.props.path+'.update()" placeholder="this.name"></div>');
}
    render(){

        return(
'<div id="'+this.props.path+'.id" ><label>'+this.name+'</label><input onkeydown="'+this.props.path+'.update()" placeholder="this.name"></div>');
    }

}
