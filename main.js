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
class Square extends Shape {
    x;
    y;
    size;
    constructor(x, y, size) {
        super();
        this.x = x;
        this.y = y;
        this.size = size;
    }
    show() {
        console.log(`Square: (${this.x},${this.y}), side ${this.size}`);
    }
    save() {
        return `(${this.x},${this.y}),${this.size}`;
    }
    load(data) {
        const parts = data.split(' ');
        this.x = Number(parts[0]);
        this.y = Number(parts[1]);
        this.size = Number(parts[2]);
        console.log('Square data has been loaded!');
    }
}
class Rectangle extends Shape {
    x;
    y;
    height;
    width;
    constructor(x, y, height, width) {
        super();
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
    show() {
        console.log(`Rectangle: (${this.x},${this.y}), Height: ${this.height}, Width: ${this.width} `);
    }
    save() {
        return `(${this.x},${this.y}),${this.height},${this.width}`;
    }
    load(data) {
        const parts = data.split(' ');
        this.x = Number(parts[0]);
        this.y = Number(parts[1]);
        this.height = Number(parts[2]);
        this.width = Number(parts[3]);
        console.log('Rectangle data has been loaded!');
    }
}
class Circule extends Shape {
    x;
    y;
    radius;
    constructor(x, y, radius) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    show() {
        console.log(`Rectangle: (${this.x},${this.y}), Radius ${this.radius} `);
    }
    save() {
        return `(${this.x},${this.y}),${this.radius}`;
    }
    load(data) {
        const parts = data.split(' ');
        this.x = Number(parts[0]);
        this.y = Number(parts[1]);
        this.radius = Number(parts[2]);
        console.log('Rectangle data has been loaded!');
    }
}
