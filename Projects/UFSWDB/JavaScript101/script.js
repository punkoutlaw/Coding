console.log("Page successfully loaded script.js");

var website = "https://codingforeverybody.com";
var teacherName = "Kalob Taulien";

console.log(website)
console.log(teacherName);

/* JavaScript Syntax & Variables */

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

/* JavaScript Conditional Statements */

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

/* Objects */

let person = {
    'name': 'David',
    'age': '35',
    'profession': 'Web Developer',
    'eyeColor': 'Blue',
};

let pet = {
    'animalType': 'cat',
    'name': 'Luna',
    'color': 'White and gray',
    'hobby': 'sleeping'
};

/* String Methods */

let learning = 'How to Become a Fullstack Web Developer';
let spaces = '   there were extra spaces in here   ';

learning.search('Fullstack'); // search method - will return 'Fullstack'
learning.slice(16, 25) // slice method - will return 'Fullstack'
learning.substr(16, 9) // 'Fullstack' - will return 'Fullstack'
learning.replace("Fullstack", "Coding") // will replace 'Fullstack" with 'Coding' and return 'How to Become a Coding Web Developer'
learning.toLocaleUpperCase() // 'HOW TO BECOME A FULLSTACK WEB DEVELOPER'
learning.toLocaleLowerCase() // 'how to become a fullstack web developer'
spaces.trim() // will trim the white spaces from '   there were extra spaces in here   '
let words = learning.split(" ") // words will return and array: (7) ['How', 'to', 'Become', 'a', 'Fullstack', 'Web', 'Developer']
learning.length // will return 39 since that it the number of characters in the string
learning[39] // return 'undefined' since the index starts at zero and ends at 38 (even though there are 39 characters)
learning[38] // returns 'r' since the index starts at zero and ends at 38

/* Casting Data Types */

// Examples

myAge = 35 // returns 35
yourAge = 64 // returns 64
myAge + yourAge // returns 99
myAge = "age" // turns myAge into a string called 'age'
myAge + yourAge // adds the two variables together and returns'age64'
myAge = 35 // turns myAge back to a number and returns 35
myAge = "35" // returns a string, '35'
myAge + yourAge // concatenates the two variables and return '3564'
myAge = Number(myAge) // turns myAge, 35, into a number instead of a string
myAge + yourAge // adds both variables and returns 99
myAge / yourAge // divides both variables and returns 0.546875
averageAge = myAge / yourAge // returns the average age, which is 0.546875
averageAge // returns 0.546875
console.log("Our ages together are " + (yourAge + myAge)); // returns 'Our ages together are 99'

// COMMENTS \\

/*
"=" is the assignment operator
var can be used within or outside its scope (in or outside {} brackets)
let can only be used within its scope
const is a variable that cannot be re-declared
var++ is the increment operator
var-- is the decrement operator
*/