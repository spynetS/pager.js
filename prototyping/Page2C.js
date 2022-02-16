

class Page2{

    constructor(props)
    {
        this.props = props;
this.children=[];
this.children[0] = new Inputfield({'path':''+this.props.path+'.children[0]','test':'ali','name':'erik'});
this.children[1] = new Inputfield({'path':''+this.props.path+'.children[1]','name':'alfred'});
this.children[2] = new Inputfield({'path':''+this.props.path+'.children[2]','test':'ali3','name':'Ali'});
    }

   

    render(){
        
        return(
'<div>'+this.children[0].render()+'<h1>what</h1>'+this.children[1].render()+''+this.children[2].render()+'</div>');
    }
}



/*
class Page2{

    constructor(props)
    {
        this.props = props;   
this.children[0] = new Inputfield({'path':''+this.props.path+'.children[0]','test':'ali','name':'erik'});
this.children[1] = new Inputfield({'path':''+this.props.path+'.children[1]','name':'alfred'});
this.children[2] = new Inputfield({'path':''+this.props.path+'.children[2]','test':'ali3','name':'Ali'});
        this.state={}
    
        this.child = new Page1();
    }

    setState(object){
        this.state= Object.assign(this.state,object);
    }

    onmounted(){
        this.setState({name:"<h1>asd</h1>"})
    }

    render(){
        
        return "<div><label>knas</label>"+this.child.render()+"</div>"
'<div>'+this.children[0].render()+'<h1>what</h1>'+this.children[1].render()+''+this.children[2].render()+'</div>');
    }
}
/*
    we have a standard component that has all the functions


*/
