class Ground{

    constructor(x,y){
        var c ={isStatic:true}
        this.a = B.rectangle(x,y,400,20,c)
        W.add(wo, this.a)
    }

    display(){
        rectMode(CENTER)
        rect(this.a.position.x, this.a.position.y, 400,20)
    }

}