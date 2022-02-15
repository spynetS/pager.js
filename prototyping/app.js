
class main{
    constructor(){
        this.child = null;
        const props = {path:"app.page",NAME:"alfred"};

        this.page = new Page2(props);

    }
    render()
    {
        console.log("what")
        var dom = document.getElementById('div');
        this.child = this.page;
        
        
        dom.innerHTML = ("<div><h1>"+"knas"+"</h1>"+this.page.render()+"</div>");
    }
}

app = new main();
app.render({name:"alfred"});
console.log(app.child)


/*
return(
          <div>
            <h1>{this.props.name}</h1>
            <Page2  ></Page2>
          </div>
        )

<script> 
class input{
  constructor(){
    this.child = "";

  }
  change(e){
    console.log("ss")
    this.name="boom";
  }
  render(props){
    props.parent.change("boom");

    return '<div style="height: 100px; width: 100px; background-color: black; text: white" ><input></input><button onclick='+'(function(e){console.log(t.child)})(event);'+' >'+props.name+'</button></div>';
  }
}

class test1{
 
  constructor(){
    this.name = "kas";
    this.child = "";

  }
  change(e){
    console.log("ss")
    this.name="boom";
  }

  render(props){
   
    const inut = new input();
    t.child = inut;
    return ('<div id="but" style="height: 100px; width: 100px; background-color: black; text: white">'+inut.render({name:this.name,parent:this})+"</div>");
  }
}

class test{
  constructor(){
    this.child = "";
  }
  change(e){
    console.log("ss")
    this.name="boom";
  }
  render(props){
    var dom = document.getElementById('div');

      const t = new test1();
      
      props ={test:'set(e)',name:"asdw",parent:event}

      dom.innerHTML = ("<div><h1>"+props.name+"</h1>"+t.render(props)+"</div>");
  }
}


</script>

*/