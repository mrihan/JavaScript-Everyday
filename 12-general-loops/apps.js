// What is JavaScript Loop?
/* 
for (let i = 0; i <= 10; i++) {
  console.log(i);
 */

//for Loop
/* 
for (let i = 0; i < 10; i += 2) {
  console.log(i);
} */

/*
for (let i = 0; i < 10; i -= -1) {
  console.log(i);
} */
/* 
for (let i = 9; i >= 0; i--) {
  console.log(i);
} */

/* // break
 for (let i = 9; i >= 0; i--) {
  if (i === 5) break;
  console.log(i);
} */

//continue
/* 
for (let i = 9; i >= 0; i--) {
  if (i === 5) continue;
  console.log(i);
} */

/* 
let myArray = ["one", "two", "three", "four", "five", "six"];
console.log(myArray);
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
} */

let myArray = ["one", "two", "three", "four", "five", "six"];
for (let i = myArray; i > myArray.length; i--) {
  console.log(myArray[2]);
}

//while Loop
// for vs while
// do..while loop
// forEach Loop
// for..of Loop
// for..in Loop
// Execution Time
