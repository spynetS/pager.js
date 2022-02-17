class Page2{

    constructor(){	
        this.props = props;
        this.name = "alfred yeo";
        this.children[0]='what'
    }
    
    render(){	
        return(
            <div id="main" >
                <Inputfield test="ali" ></Inputfield>
                <h1>what</h1>
                <Inputfield name="alfred" ></Inputfield>
                <Inputfield test="ali3" ></Inputfield>
            
            </div>
        );
    }
    rerender()
    {	
        document.getElementById('knas').outerHtml = '<div>what</div>'
    }
    
}
