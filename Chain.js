class Chain{
    constructor(b1 , b2) {
        var options = {
           bodyA: b1 ,
           pointB: b2 ,
           stiffness: 1

        }
        this.ch =Matter.Constraint.create(options);
        
        World.add(world, this.ch);
      }
      fly(){
          this.ch.bodyA = null;
      }
      
      display(){
          push()
          strokeWeight(5)
          if (this.ch.bodyA != null){

          
       line(this.ch.bodyA.position.x,
            this.ch.bodyA.position.y,
            this.ch.pointB.x,
            this.ch.pointB.y)
            
       }
       pop()
       }
}