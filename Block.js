class block{
  constructor(x, y, width, height){
    var options={
      restitution:0.8,
      friction:1.4,
      density:1.0
    }
    this.x=x
    this.y=y
    this.width=width
    this.height=height
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
  }
  display(){
    if(this.body.speed<4){
      var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
    else{
      World.remove(world, this.body);
      push();
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
      Image(this.image,this.body.position.x, this.body.position.y, 50, 50);
    pop();
    } 
  }
  }
