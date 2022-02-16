
import Inputfield from 'Inputfield'

class Page2{

    constructor(props)
    {
        this.props = props;
    }

   

    render(){
        
        return(
            <div id="main" >
j                <Inputfield test="ali" ></Inputfield>
                <h1>what</h1>
                <Inputfield name="alfred" ></Inputfield>
                <Inputfield test="ali3" ></Inputfield>
            
            </div>
        );
    }
}



/*
class Page2{

    constructor(props)
    {
        this.props = props;   
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
        ;
    }
}
/*
    we have a standard component that has all the functions


*/
