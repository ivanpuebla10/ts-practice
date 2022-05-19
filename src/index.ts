//Basic Types
let id: number = 5
let company: string = "Orange"
let isPublished: boolean = true
let x: any = "Hello"

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,true,"Hello"]

//Tuple
let person: [number, string, boolean] = [1,"Brad",true]

//Tuple array
let employee: [number, string][]
employee = [
    [1,"Brad"],
    [2,"John"],
    [3,"Jill"]
]

//Union
let pid: string | number = 22
pid = "22"

//Enum
enum direction1 {
    Up, //Every position will return a number, starting from 0 in this case by default, but I can change it setting Up = 1, and the rest will change as well
    Down,
    Left,
    Right
}

console.log(direction1.Up) // should return 0

// I can also set the values to strings

enum direction2 {
    Up = "Up", //Every position will return a number, starting from 0 in this case by default, but I can change it setting Up = 1, and the rest will change as well
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

console.log(direction2.Up) //should return "Up"

//Objects
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: "John"
}

//Other way to set the object's type

type User = {
    id: number,
    name: string
}

const user1: User = {
    id: 1,
    name: "John"
}

//Type Assertion
//two ways
let cid: any = 1
// let costumerId = <number>cid // I'm setting costumerId to cid but as a diferent type(number)}
let costumerId = cid as number // other way

//Functions
function addNum (x: number, y: number): number {
    return x + y
}

//Void
function log (message: string | number) {
    console.log(message)
}

//Interfaces
interface UserInterface {
    readonly id: number, //read-only property
    name: string,
    age?: number //the ? allows me to not neccesarly set it to a valor in user2(optional property)
}

const user2: UserInterface = {
    id: 1,
    name: "John"
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
    id: number
    name: string
    register(): string
}

class Person1 implements PersonInterface {
    id: number 
    name: string 
    constructor (id: number, name: string) {
        this.id = id,
        this.name = name
    }
    
    register () {
        return `${this.name} is now registered`
    }
}
//Classes
class Person {
    private id: number //this property is only accessible within the class(I cannot console it nor change it)
    protected name: string // this property is only accessible within the class or from any class that is extended from this class
//the property is public by default
    constructor (id: number, name: string) {
        this.id = id,
        this.name = name
    }
    
    register () {
        return `${this.name} is now registered`
    }
}

const Brad = new Person(1,"Brad")

//Subclasses
class Employee extends Person {
    position: string
    constructor(id: number, name: string, position: string) {
        super(id,name)
        this.position = position
    }
}

const emp = new Employee (1,"John", "developer")

//Generics (usted to build reusable components)

// function getArray (items: any[]): any[] {
//     return new Array().concat(items)
// }

// let numArray = getArray([1,2,3,4])
// let stringArray = getArray(["Brad","John","Jill"])

function getArray<T> (items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let stringArray = getArray<string>(["Brad","John","Jill"])