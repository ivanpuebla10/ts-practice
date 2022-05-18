"use strict";
//Basic Types
let id = 5;
let company = "Orange";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
//Tuple
let person = [1, "Brad", true];
//Tuple array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"]
];
//Union
let pid = 22;
pid = "22";
//Enum
var direction1;
(function (direction1) {
    direction1[direction1["Up"] = 0] = "Up";
    direction1[direction1["Down"] = 1] = "Down";
    direction1[direction1["Left"] = 2] = "Left";
    direction1[direction1["Right"] = 3] = "Right";
})(direction1 || (direction1 = {}));
console.log(direction1.Up); // should return 0
// I can also set the values to strings
var direction2;
(function (direction2) {
    direction2["Up"] = "Up";
    direction2["Down"] = "Down";
    direction2["Left"] = "Left";
    direction2["Right"] = "Right";
})(direction2 || (direction2 = {}));
console.log(direction2.Up); //should return "Up"
//Objects
const user = {
    id: 1,
    name: "John"
};
const user1 = {
    id: 1,
    name: "John"
};
//Type Assertion
//two ways
