//1
abstract class Equation
{
    abstract solve() : number[]
}
class LinearEquation extends Equation
 {
    constructor(private a:number, private b:number)
    {
        super()
    }
    solve(): number[]{
        if(this.a === 0) return[]
        return[-this.b/this.a]
    }
 }
class QuadraticEquation extends Equation
{
    constructor(private a: number, private b:number, private c: number)
    {
        super()
    }
    solve():number[]{
        const d = this.b **2 - 4*this.a*this.c
        if(d<0) return []
        if(d===0)
            return[-this.b/(2*this.a)]
        const x1 = Math.floor((-this.b + Math.sqrt(d))/(2*this.a))
        const x2 = Math.floor((-this.b - Math.sqrt(d))/(2*this.a))
        return [x1,x2]
    }
}
const N = new LinearEquation(2,4)
console.log(N.solve())
const M = new QuadraticEquation(1,-3,2)
console.log(M.solve())


//2
abstract class Shape
{
    abstract show() : void
    abstract save(): string
    abstract load(data:string): void
}
class Square extends Shape{
    constructor(private x: number, private y:number, private size:number)
    {
        super();
    }
    show(): void
    {
        console.log(`Square: (${this.x},${this.y}), side ${this.size}`)
    }
    save():string
    {
        return `(${this.x},${this.y}),${this.size}`
    }
    load(data: string): void
    {
        const parts = data.split(' ')
        this.x = Number(parts[0])
        this.y = Number(parts[1])
        this.size = Number(parts[2])
        console.log('Square data has been loaded!')
    }
}
 class Rectangle extends Shape
    {
    constructor(private x: number, private y:number,private height: number,private width: number)
    {
        super();
    }
    show(): void
    {
        console.log(`Rectangle: (${this.x},${this.y}), Height: ${this.height}, Width: ${this.width} `)
    }
    save():string
    {
        return `(${this.x},${this.y}),${this.height},${this.width}`
    }
    load(data: string): void
    {
        const parts = data.split(' ')
        this.x = Number(parts[0])
        this.y = Number(parts[1])
        this.height = Number(parts[2])
        this.width = Number(parts[3])
        console.log('Rectangle data has been loaded!')
    }
}
 class Circule extends Shape
    {
    constructor(private x: number, private y:number,private radius: number)
    {
        super()
    }
    show(): void
    {
        console.log(`Circule: (${this.x},${this.y}), Radius ${this.radius} `)
    }
    save():string
    {
        return `(${this.x},${this.y}),${this.radius}`
    }
    load(data: string): void
    {
        const parts = data.split(' ')
        this.x = Number(parts[0])
        this.y = Number(parts[1])
        this.radius = Number(parts[2])
        console.log('Circule data has been loaded!')
    }
}
class Elipse extends Shape
{
    constructor(private x: number, private y: number, private height: number, private width: number)
    {
        super()
    }
    show(): void
    {
        console.log(`Elipse: (${this.x},${this.y}), Height: ${this.height}, Width: ${this.width} `)
    }
    save(): string
    {
        return `(${this.x},${this.y}),${this.height},${this.width}`
    }
    load(data: string): void
    {
        const parts = data.split(' ')
        this.x = Number(parts[0])
        this.y = Number(parts[1])
        this.height = Number(parts[2])
        this.width = Number(parts[3])
        console.log('Elipse data has been loaded!')
    }
}
const shapes: Shape[] = [
    new Square(5, 8, 12),
    new Rectangle(12, 20 , 56, 32),
    new Circule(25, 18, 67),
    new Elipse(4, 5, 12, 16)
]
shapes.forEach((shape, index) => {
    console.log(`Shape №${index + 1}: `);
    shape.show();
})

let data: string = shapes[1].save();
shapes[1].load("1, 2, 3, 4");
shapes[1].show();