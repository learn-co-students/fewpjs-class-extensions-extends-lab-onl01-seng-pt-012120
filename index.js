class Polygon {
    constructor(array) {
        this.sides = array
    }
    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((allValues, value) => {
            return allValues + value
        })
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sides.length == 3) {
            if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[2] + this.sides[0] > this.sides[1]) {
                return true
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
         
        if (this.sides.reduce((allValues, value) => allValues + value) == this.sides[0] * 4) {
            return true
        }
        else {
            return false
        }
    }

    get area() {
        return this.sides[0] * this.sides[1]
    }
}