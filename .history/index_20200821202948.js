// Your code here
class Polygon{
    constructor (sides){
        this.sides = sides;
    }

    get countSides(){
        return this.sides.count();
    }

    get perimeter(){
        return this.sides.reduce((acc,cv)=> {acc + cv;});
    }
}