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
        if(this.a ===0) return[]
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