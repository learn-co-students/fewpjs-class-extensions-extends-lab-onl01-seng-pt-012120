// Your code here
class Polygon {
    constructor(sidesLength) {
        this.sidesLength = sidesLength;
    };

    get countSides() {
        return this.sidesLength.length;
    };

    get perimeter() {
        return this.sidesLength.reduce((total, side) => total + side, 0);
    };
};

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            let sumOfTwo = this.perimeter - this.sidesLength[0];
            return sumOfTwo > this.sidesLength[0]
        } else {
            return false
        }
    };
};

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            return this.sidesLength[0] === this.perimeter/4;
        } else {
            return false
        }
    };

    get area() {
        if (this.isValid) {
            return (this.perimeter/4)**2;
        } else {
            throw new Error('unable to calculate the area. This is not a valid square.');
        }
    };
};