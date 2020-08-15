const numbers = [22, 2, 34, 56, 41, 77];
const numbers2 = new Array(22, 34, 76, 41, 77);
const color = ["yellow", "red", "green", "orange"];
const mixed = [26, "hellow", true, undefined, null, { a: 1, b: 2 }, new Date()];

let value;
value = numbers.length;
value = Array.isArray(numbers);
value = numbers[2];
value = numbers[0];

//numbers[0] = 100;
value = numbers.indexOf(41);

//mutating (number add )
//numbers.push(100); // last line number add
//numbers.unshift(500); // first line number add
//value = numbers.length;

//numbers.pop();
//numbers.shift();

//numbers.splice(1, 2);
//numbers.reverse();

//value = numbers.concat(numbers2);

//value = numbers.sort(function (x, y) {
//  return x - y;
//});

function over50(num) {
  return num > 50;
}
value = numbers.find(over50);

function over50(num) {
  return num > 50;
}
value = numbers.find(over50);
//output
console.log(numbers);
console.log(value);
