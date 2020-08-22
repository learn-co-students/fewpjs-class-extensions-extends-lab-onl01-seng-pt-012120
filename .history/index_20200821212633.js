// Your code here
class Polygon{
    constructor (sides){
        this.sides = sides;
    }

    get countSides(){
        return this.sides.length;
    }

    get perimeter(){
        const reducer = (acc, cv) => acc + cv;
        return this.sides.reduce(reducer);
    }
}

class Triangle extends Polygon {
    get isValid() {

        if(this.sides.length !== 3) return;
        return (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[2] + this.sides[0] > this.sides[1]);
    };
}