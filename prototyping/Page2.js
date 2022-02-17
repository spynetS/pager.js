
import Inputfield from 'Inputfield'

class Page2{

    constructor(props)
    {
        this.props = props;
        this.name = "alfred yeo";
    }

    update()
    {
        if(this.props.name == "alfred")
            this.props.name = "what2";
        else{
            this.props.name = "alfred";
        }
        
        this.rerender();
    }

    render()
    {
        
        return(
            <div id="main" >
                <Inputfield test="ali" ></Inputfield>
                <h1>what</h1>
                <Inputfield name="alfred" ></Inputfield>
                <Inputfield name="Ali" test="ali3" ></Inputfield>
                <button onclick={this.update()} >Change name</button>
            </div>
        );
    }
}

/*

//this is how to update component
document.getElementById(this.props.path+".id").outerHTML = ('<div id='+this.props.path+".id"+' >'+this.children[0].render()+'<h1 id="knass">'+this.props.name+'</h1>'+this.children[1].render()+''+this.children[2].render()+'<button onclick="'+this.props.path+'.update()"></button></div>');
//set component id to the path then when compiling save the thing
//and set the div with correct id to the new html(with the new data)
*/
