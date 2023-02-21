console.log("Page successfully loaded script.js");

var website = "https://codingforeverybody.com";
var teacherName = "Kalob Taulien";

console.log(website)
console.log(teacherName);

let apples = 2;
const height = "5'10\""
console.log("I have", apples, "apples");
console.log("I am", height)
console.log("My teachers name is", teacherName)

// JavaScript Data Types

const str = "A string"; // String
const num = 3; // Number
const flt = 3.14; // Float
const bool = true; // or "false", Boolean
const list = ["item 1", 2, "Three", 3.14, []]; // Array = List
const thing = null; // Has nothing in it
const notDefined = undefined; // Currently holds no value
const getAge = function() { return 31; }; // This is a Function
const obj = {
    'name': 'David',
    'profession': 'Web Developer'
    // Object; can be accessed with obj['name']
}

// JavaScript Conditional Statements

// If else statements

const age = 35;

if(age >= 18) {
    console.log('I can vote!');
}

if(age >= 21) {
    console.log('Yay, I can drink alcohol!')
} else {
    console.log('Boo, I am not old enough to drink alcohol!');
}

// Else if statements

const name = "David";

if(name == "PepperCherry") {
    console.log("Welcome, PepperCherry!")
} else if (name == "David") {
    console.log("Hello, David")
} else {
    console.log("Hello, Guest");
}

// COMMENTS \\

/*
"=" is the assignment operator
var can be used within or outside its scope (in or outside {} brackets)
let can only be used within its scope
const is a variable that cannot be re-declared
var++ is the increment operator
var-- is the decrement operator
*/