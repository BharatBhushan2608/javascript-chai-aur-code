/*
types of datatypes 1) primitive 2) non-primitive (reference)

PRIMITIVE DATA TYPES

Number
String
boolean
undefined
null
BigInt
Symbol

NON PRIMITIVE DATA TYPES

Array
object 
function

*/

// primitive datatypes example

const score = 100
console.log(typeof score);

const scoreValue = 100.3
console.log(typeof scoreValue);

const isLoggedIn = false
console.log(typeof isLoggedIn);

// null typeof always object dikhata hai
const outsideTemp = null
console.log(typeof outsideTemp);

const Name = "Bharat"
console.log(typeof Name);

const id = Symbol('123')
const id1 = Symbol('345')
console.log(id === id1)
console.log(typeof id);

let emailId;
console.log(typeof emailId);

let emailId1 = undefined
console.log(typeof emailId1);

const bigNumber = 73472174619n
console.log(typeof bigNumber);


// NON PRIMITIVE DATA TYPES
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof  myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3





