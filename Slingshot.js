class SlingShot{
constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        length:20,
        stiffness:0.05
    }
    this.pointB=pointB;
this.body=Constraint.create(options)
World.add(world,this.body)
}
attach(body){
    this.sling.bodyA=body;
}
fly(){
    this.body.bodyA=null
}
display(){
   if(this.body.bodyA){
  var pointA=this.body.bodyA.position;
   var pointB=this.pointB;
strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}
}