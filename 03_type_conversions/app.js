let example;

// Number to Stering
example = String(555);
//example = 5+5;
example = String(5+5);

example = String (5555);

//Date to String
//example = new Date ();
example = String (new Date());

// Boolean to String
example = String(true);

// Arrey to String
example = String([1, 2, 3,]);

// Another way with toString() method;
example = (555); toString();

//Boolean to Number
example = Number(false);

//Text to Number
example = Number("Hello Js");

// Another ways
//example = "555";
 example = parseInt("555.555555");
example = parseFloat("555.45542541")

/*val1 = "6   ";
val2 = 6;
example = val1 + val2;*/

val1 = "6";
val2 = 6;
example = Number(val1 + val2);

// Automatic type javascript





// Output
console.log(example);
console.log(typeof example);
//console.log(example.length);
//console.log(example.toFixed(2))
