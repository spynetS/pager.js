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
        
    }

    render(){

        return(
            <div id="main" >
                <label >{this.name}</label>
                <input onkeydown={this.update()} placeholder={this.name}></input>
            </div>
        );
    }

}