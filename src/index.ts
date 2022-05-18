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

