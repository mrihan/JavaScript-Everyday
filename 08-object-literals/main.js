const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  email: "john@example.com",
  address: {
    city: "Rajshahi",
    zipcode: 6300,
  },
  getBritheYear: function () {
    return 1997 - this.age;
  },
};
let value;
value = person;

// specific value
value = person.firstName;
value = person.address;
value = person["lastName"];
value = person["age"];
value = person.address.city;
value = person.address.zipcode;
value = person.getBritheYear();

const people = [
  { name: "Raihan", age: 25 },
  { name: "hasan", age: 30 },
  { name: "manik", age: 30 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

//output
//console.log(value);
