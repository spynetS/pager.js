
import Inputfield from 'Inputfield'

class Page2{

    constructor(props)
    {
        this.props = props;
        this.name = "alfred yeo";
    }

   

    render()
    {
        
        return(
            <div id="main" >
                <Inputfield test="ali" ></Inputfield>
                <h1>what</h1>
                <Inputfield name="alfred" ></Inputfield>
                <Inputfield test="ali3" ></Inputfield>
            
            </div>
        );
    }
}

