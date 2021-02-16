//class of box

class Paper extends BaseClass{

    constructor(x,y)
    {

        //here we write properties
      super(x,y,50,50);
      
        this.image=loadImage("paper.png");
        this.velocityX = -10;
    }
    display()
    {

       // this.body.position.x = mouseX;
       // this.body.position.y = mouseY;
        super.display();
       
    }


};




