

class Page1{

    constructor()
    {
        //detta ska ju vara hidden tänker jag
        // det borde skapas när man gör <Inputfield></Inputfield>


        this.child = [];
        this.child[0] = new Inputfield({name:"click me",path:"app.child.child[0]"});
        this.child[1] = new Inputfield({name:"click me",path:"app.child.child[1]"});
        this.child[2] = new Inputfield({name:"click me",path:"app.child.child[2]"});
        this.child[3] = new Inputfield({name:"click me",path:"app.child.child[3]"});
        this.child[4] = new Test({name:"click me",path:"app.child.child[4]"});
    }

    set(){
        console.log("what tha fanck");
    }

    render()
    {
       return("<div>"+this.child[0].render()+this.child[4].render()+"</div>");
    }
}