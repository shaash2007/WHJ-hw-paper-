class Paper {
    constructor(x, y, radius) {
   
var options={
  isStatic:false,
  restitution:0.3,
  friction:0.5,  
  density:1.2
}
this.paper=Bodies.circle(x, y, radius/2,options);
this.radius=radius
World.add(world,this.paper)}
display(){
  var pos =this.paper.position;
  push ()
  translate(pos.x,pos.y)
  ellipseMode(RADIUS);
  fill("white");
  ellipse(0, 0, this.radius, this.radius);
 pop () 
};
    }
    