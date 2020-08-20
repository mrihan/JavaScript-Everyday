// Function declaration
// not
/* let a = 15;
let b = 25;
console.log(a + b);

let c = 40;
let d = 25;
console.log(c + d); 
*/
function adder(a, b) {
  console.log(a + b);
}
adder(10 + 25);
// parameter
// argument

// local Variables
/* 
function great() {
  let userName = "Rihan";
  console.log("hello " + userName);
}
great();
*/

// Global Variables
/*
let userName = "Rihan"; // Global variables
function great() {
  console.log("hello" + userName);
}
great();
console.log(userName);
*/

// parameters and its evloution

// Argument without
/* 
function test(a, b) {
  console.log("hello " + a + b);
}
test(); 
*/
// Argumnet with
/* 
function test(a, b) {
  console.log("hello " + a + b);
}
test("manik " "Rihan"); 
*/
// without content ES5
/* 
function test(a, b) {
  if (typeof a === "undefined") {
    a = "Rihan ";
  }
  if (typeof b === "undefined") {
    b = "Hasan";
  }
  console.log("hello " + a + b);
}
test("anas ", "hasib ");
*/
// without content ES6
/* 
function test(a = "Rihan ", b = "Hasan") {
  console.log("hello " + a + b);
}
test(); 
*/

// Returning a value
/* function square(x) {
  console.log(x + x);
}
let squareFour = square(4);
console.log(squareFour); */

// Namimg Function (Get, set, calc, create, check)
// getValue;
// setValue;
// calSquare;
// createUser;
// checkValue;
// Commenting as like that

// Immidiatley invokable function expressions - IIFEs

(function (name) {
  console.log(name);
})("rihan");
