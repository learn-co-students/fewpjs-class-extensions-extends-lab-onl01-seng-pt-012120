class Polygon{
    constructor(integers){
        this.sides = integers
    }

    get countSides() {
       return  this.sides.length
    }

    get perimeter(){
        const totaler = (runningTotal, nextItem) =>{
            return runningTotal + nextItem
        };

        let perimeter = this.sides.reduce(totaler, 0)
        return perimeter
    }
}

class Triangle extends Polygon{



    get isValid(){
        let sideOne = this.sides[0];
        let sideTwo = this.sides[1];
        let sideThree = this.sides[2];
        if (this.countSides === 3 && sideOne + sideTwo > sideThree && sideOne + sideThree > sideTwo && sideTwo + sideThree > sideOne){
            
            return true
        } else {return false}
    }

}

class Square extends Polygon{
    
    get isValid(){
        let sideOne = this.sides[0];
        let sideTwo = this.sides[1];
        let sideThree = this.sides[2];
        let sideFour = this.sides[3];

        if (sideOne == sideTwo && sideTwo == sideThree && sideThree == sideFour){
            return true
        } else {return false}
    }

    get area (){
         return this.sides[0] * this.sides[1]
    }
}
