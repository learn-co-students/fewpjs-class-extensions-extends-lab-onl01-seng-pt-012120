class Polygon {
    constructor(a) {
        this.array = a
    }
    get countSides() {
        return this.array.length
    }
    get perimeter() {
        return this.array.reduce((m, i) => m + i)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let a = this.array[0];
        let b = this.array[1];
        let c = this.array[2];
        if (a + b <= c || b + c <= a || a + c <= b) {return false} else {return true};
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) {return false};
        let a = this.array[0];
        let b = this.array[1];
        let c = this.array[2];
        let d = this.array[3];
        if (a !== b || a !== c || a !== d) {return false} else {return true}
    }
    get area() {
        return this.array[0] ** 2;
    }
}