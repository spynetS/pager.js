
import Inputfield from 'Inputfield'

class Page2{

    constructor(props)
    {
        this.props = props;
    }

   update()
   {
        console.log("update from page2");
        document.getElementById(this.props.path+".id").outerHTML = ('<div id='+this.props.path+".id"+' >'+this.children[0].render()+'<h1 id="knass">'+this.props.name+'</h1>'+this.children[1].render()+''+this.children[2].render()+'<button onclick="'+this.props.path+'.update()"></button></div>');

    }

    render(){
        
        return(
            <div id="main" >
j               <Inputfield name="erik" test="ali" ></Inputfield>
                <h1 id="knass" >{this.props.name}</h1>
                <Inputfield name="alfred" ></Inputfield>
                <Inputfield name="Ali" test="ali3" ></Inputfield>
                <button onclick={this.update()} ></button>
            </div>
        );
    }
}


//this is how to update component
document.getElementById(this.props.path+".id").outerHTML = ('<div id='+this.props.path+".id"+' >'+this.children[0].render()+'<h1 id="knass">'+this.props.name+'</h1>'+this.children[1].render()+''+this.children[2].render()+'<button onclick="'+this.props.path+'.update()"></button></div>');
//set component id to the path then when compiling save the thing
//and set the div with correct id to the new html(with the new data)