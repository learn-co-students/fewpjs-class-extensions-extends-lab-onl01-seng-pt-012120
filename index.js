class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((total, x) => x + total, 0)
  }
}

class Triangle extends Polygon {
  // The sum of the lengths of any two sides 
  // of a triangle is greater than the length of 
  // the third side. If you take the three sides 
  // of a triangle and add them in pairs, the sum 
  // is greater than (not equal to) the third side. 
  // If that is not true, then it is not possible 
  // to construct a triangle with the given side lengths.
  get isValid() {
    return this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[0] + this.sides[2] > this.sides[1]
  }
}

class Square extends Polygon {
  get area() {
    return this.sides[0] ** 2
  }

  get isValid() {
    // take total of sides and then divide by 4
    // use every to test for that side
    return this.sides.every(x => x === this.perimeter / 4)
  }
}

let square = new Square( [ 5, 5, 5, 5 ] )
let square2 = new Square( [ 5, 4, 3, 2 ] )

square.isValid
square2.isValid