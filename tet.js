import inputfield from './prototyping/Inputfield';

class app{
    constructor(props){
        this.props = props;
        props = {path:"app.child"};
    }
    update(e){
        console.log(e);
    }
    render(){
        //save every component inside as a seperate string
        //then when a component data has changed we reload that string
        console.log("input render")
        return(
            <div id="main" >
                <label>knas</label>
                <inputfield placeholder={this.NAME} onkeydown={this.update()} ></inputfield>
            </div>
        );
    }
}
