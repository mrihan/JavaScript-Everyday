// if vs switch
/* 
let text = "hello";
let rollnumber = 3;

*/

// if Statement Basic
/* 
if (rollnumber === 1) {
  text = "Congratulation ! you are first.";
} else if (rollnumber === 2) {
  text = "Congratulation! but you can do better now";
} else if (rollnumber === 3) {
  text = "Third is not bad!";
}
console.log(text); 
*/

// Switch Statement Basic
/*
 switch(expression) {
  case condition:
    code block
  break;
}
*/

// Switch Statement Example
/*
let text;
let rollnumber = 6;

switch (rollnumber) {
  case 1:
    text = "Congratulation! You are first.";
    break;
  case 2:
    text = " You are Second";
    break;
  case 3:
    text = " You are third";
    break;
  case 4:
    text = "You are 4th number position";
    break;
  default:
    text = "What is your roll";
}
console.log(text); 
*/

// use of Break
let text;
let rollnumber = 6;

switch (rollnumber) {
  case 1:
    text = "Congratulation! You are first.";
    break;
  case 2:
    text = " You are Second";
  case 3:
    text = " You are third";
  case 4:
    text = "You are 4th number position";
  default:
    text = "What is your roll";
}
console.log(text);

// Grouping case
let color = "red";
switch (color) {
  case "red":
  case "green":
  case "blue":
    console.log("you have seleted RGB color");
    break;
  case "cyan":
  case "megenta":
  case "yellow":
  case "black":
    console.log("You have selected CMKY color");
    break;
}
