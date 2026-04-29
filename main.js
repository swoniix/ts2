"use strict";
//1
class Equation {
}
class LinearEquation extends Equation {
    a;
    b;
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
    solve() {
        if (this.a === 0)
            return [];
        return [-this.b / this.a];
    }
}
class QuadraticEquation extends Equation {
    a;
    b;
    c;
    constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }
    solve() {
        const d = this.b ** 2 - 4 * this.a * this.c;
        if (d < 0)
            return [];
        if (d === 0)
            return [-this.b / (2 * this.a)];
        const x1 = Math.floor((-this.b + Math.sqrt(d)) / (2 * this.a));
        const x2 = Math.floor((-this.b - Math.sqrt(d)) / (2 * this.a));
        return [x1, x2];
    }
}
const N = new LinearEquation(2, 4);
console.log(N.solve());
const M = new QuadraticEquation(1, -3, 2);
console.log(M.solve());
//2
class Shape {
}
