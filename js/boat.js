class Boat {

constructor(x,y,w,h,boatpos){

this.body = Bodies.rectangle(x,y,w,h)
this.w = w;
this.h = h;
this.boatpos = boatpos;
this.image = loadImage("assets/boat.png");
World.add(world,this.body);

}

display(){

 var pos = this.body.position

 push();
 translate(pos.x,pos.y);
 imageMode(CENTER);
 image(this.image, 0, 0, this.w, this.h);
 pop();
 }
}