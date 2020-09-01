// Your code here
class Polygon{
    constructor(arrayOf_Sides){
        this._sides = arrayOf_Sides
        this.count = this._sides.length
    }
    get countSides(){
        return this.count
    }
    get perimeter(){
        let total = 0;
        for( let i = 0; i < this.count; i++){
            total = total + this._sides[i]
        }
        return total
    }
}


class Triangle extends Polygon{
    get isValid(){
        if (!Array.isArray(this._sides)) return;
        if (this.count !== 3) return;
        let side1 = this._sides[0]
        let side2 = this._sides[1]
        let side3 = this._sides[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon{
    get isValid() {
       // if (!Array.isArray(this.sides)) return;
        if (this.count !== 4) return;
        let side1 = this._sides[0]
        let side2 = this._sides[1]
        let side3 = this._sides[2]
        let side4 = this._sides[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
      }
    get area(){
        let a =this._sides[1]
        let b = this._sides[0]
        return a*b
    }
}