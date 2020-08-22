// Your code here
class Polygon{
    constructor (sides){
        this.sides = sides;
    }

    get countSides(){
        return this.sides.length;
    }

    get perimeter(){
        console.log(this.sides.reduce((acc,cv)=> {acc + cv;}));
    }
}