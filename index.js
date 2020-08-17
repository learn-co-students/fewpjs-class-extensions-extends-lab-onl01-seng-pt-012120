class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce(function(e,m) {return e+m})
    }
}

class Triangle extends Polygon {
    get isValid() {
        let sortedSides = this.sides.sort();
        if ( sortedSides[2] < (sortedSides[0] + sortedSides[1]) ) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let uniqSides = new Set(this.sides)
        if (uniqSides.size === 1) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return (this.sides[0] ** 2)
    }
}