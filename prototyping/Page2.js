

class Page2{

    constructor()
    {
        this.child = null;
    }

    set(e){
        console.log(e);
    }

    render()
    {
        return("<div onclick='(function(e){app.child.child.set(e)})(event);' style='background-color:black;width:300px;height:300px' ></div>")
    }
}