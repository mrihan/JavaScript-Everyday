
/*let Name = "Raihan";
console.log(Name);

let Adress = "Dhaka";
console.log(Adress);

let number = "01746330554";
console.log(number);

// number to string

let nameString = String(6300);
console.log(nameString);
console.log(typeof nameString);
console.log(nameString.length);
*/

let str1 = "Frist course of this channel is about Javascript";

let str2 = "and we wil course course learn more thing too";

// CharAr()
console.log(str1.charAt(0));

// CharCodeAt
console.log(str1.charCodeAt(2));

//concat()
console.log(str1.concat(str2));

//endsWith()
//console.log(str1.endsWith("Javascript"));
console.log(str1.endsWith("javascript"));

// fromCharCode()
console.log(String.fromCharCode(114));

// includes()
console.log(str1.includes("this"));

//indexof()
console.log(str1.indexOf("course"));

//lastindexof()
console.log(str1.lastIndexOf("course"));

//match()
console.log(str1.match(/course/g));

//repeat()
console.log(str2.repeat(5));

//replace()
console.log(str2.replace(/course/g, "raihan"));


// search()
console.log(str2.search("course")); 

// slice()
console.log(str1.slice(1,5));


// split()
console.log(str2.split(" "));



// toUpperCase()
console.log(str1.toUpperCase());

//toLowerCase()
console.log(str2.toLowerCase());