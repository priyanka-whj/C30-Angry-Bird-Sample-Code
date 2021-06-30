class Bird extends BaseClass
{
    constructor(x, y)
    {
        super(x, y, 50, 50) //call base class constructor function
        this.image = loadImage("sprites/bird.png");

        
    }
    display()
    {
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display(); //call display function of the parent class (BaseClass)
    }
};