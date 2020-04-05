
class Chain{
 constructor(bodyA, bodyB){
 var options = {
     bodyA: bodyA,
     bodyB: bodyB ,
     stiffness: 0.1,
     length: 20 
 }
 this.chain = Matter.Constraint.create(options)
 World.add(world, this.chain)
}
display(){
    strokeWeight(7)
    var chains = this.chain.bodyA.position
    var chains2 = this.chain.bodyB.position

    line(chains.x, chains.y, chains2.x, chains2.y)
}
}
