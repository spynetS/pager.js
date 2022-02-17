

class Page2{

    constructor(props)
    {
        this.props = props;
this.children=[];
this.children[0] = new Inputfield({'path':''+this.props.path+'.children[0]','test':'ali','name':'erik'});
this.children[1] = new Inputfield({'path':''+this.props.path+'.children[1]','name':'alfred'});
this.children[2] = new Inputfield({'path':''+this.props.path+'.children[2]','test':'ali3','name':'Ali'});
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

rerender(){

document.getElementById(this.props.path+".id").outerHTML = ('<div id="'+this.props.path+'.id" >'+this.children[0].render()+'<h1 id="knass">'+this.props.name+'</h1>'+this.children[1].render()+''+this.children[2].render()+'<button onclick="'+this.props.path+'.update()">Change name</button></div>');
}
    render(){

        return(
'<div id="'+this.props.path+'.id" >'+this.children[0].render()+'<h1 id="knass">'+this.props.name+'</h1>'+this.children[1].render()+''+this.children[2].render()+'<button onclick="'+this.props.path+'.update()">Change name</button></div>');
    }
}

/*

//this is how to update component
document.getElementById(this.props.path+".id").outerHTML = ('<div id='+this.props.path+".id"+' >'+this.children[0].render()+'<h1 id="knass">'+this.props.name+'</h1>'+this.children[1].render()+''+this.children[2].render()+'<button onclick="'+this.props.path+'.update()"></button></div>');
//set component id to the path then when compiling save the thing
//and set the div with correct id to the new html(with the new data)
*/
