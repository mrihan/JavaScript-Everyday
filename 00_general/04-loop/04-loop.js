// for statement
/* 
for (var i = 0; i < 10; i++) {
  console.log("go" + i + "step");
}

for (var num = 0; num < 20; num++) {
  console.log("Go " + num + " way");
}

for (var name = 0; name < 30; name++) {
  console.log("Go " + name + " Wow");
} 
*/

// do while
/* 
var num;
do {
  console.log("Inside the loop");
  num = prompt("Enter the number");
} while (num < 10);
console.log("outside the loop");

var number;
do {
  console.log("Inside the loop");
  number = prompt("Enter the number");
} while (number < 30);
console.log("outside the loop");
 */

// while statement
/* 
var num = 0;
while (num < 10) {
  console.log("Inside the loop");
  num = prompt("Enter the number:");
}
console.log("Out of the loop");
 */

/* 
var num = 20;
while (num < 10) {
  console.log("Inside the loop");
  num = prompt("Enter the number");
}
console.log("Out the loop");
 */
/* 
 for (var i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log("i is now at: " + i);
}
 */
//continue

for (var i = 0; i < 10; i++) {
  if (i === 5) {
    console.log(i + "is skipped");
    continue;
  }
  console.log("i is now at:" + i);
}
