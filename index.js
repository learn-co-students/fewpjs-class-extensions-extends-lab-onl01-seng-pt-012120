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
        return ( sortedSides[2] < (sortedSides[0] + sortedSides[1]) )
    }
}

class Square extends Polygon {
    get isValid() {
        let uniqSides = new Set(this.sides)
        return (uniqSides.size === 1)
    }

    get area() {
        return (this.sides[0] ** 2)
    }
}