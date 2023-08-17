//Object Data Structure

//An object is an unordered collection of key-value pairs. The key must either be a string or symbol data type where as the value can be of any data type.
//To retrieve a value from an object, we use the dot notation or bracket notation.
//An object is not an iterable. You cannot use a for...of loop to iterate through an object.

// Creating an Object:
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};

// Accessing Object Properties:
// Dot Notation:
console.log(person.firstName);

// Bracket Notation:
console.log(person["firstName"]);

// Nested Objects:
console.log(person.address.city);

// Adding and Deleting Properties:
person.job = "Developer";
delete person.isStudent;

// Checking if a Property Exists:
console.log("address" in person);
console.log("isStudent" in person);

// Object Methods:
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  getDescription() {
    return `${this.year} ${this.brand} ${this.model}`;
  },
};

console.log(car.getDescription()); // Output: 2022 Toyota Camry

// Iterating Through Object Properties:
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Object Keys:
const keys = Object.keys(person);
console.log(keys); // Output: ["firstName", "lastName", "age", "isStudent", "address"]

//Iterating Through Object Keys:
for (const key of Object.keys(person)) {
  console.log(`${key}: ${person[key]}`);
}

// Object Values:
const values = Object.values(person);
console.log(values); // Output: ["John", "Doe", 30, false, { street: "123 Main St", city: "Anytown", country: "USA" }]

// Object Entries:
const entries = Object.entries(person);
console.log(entries);
// Output:
// [
//   ["firstName", "John"],
//   ["lastName", "Doe"],
//   ["age", 30],
//   ["isStudent", false],
//   ["address", { street: "123 Main St", city: "Anytown", country: "USA" }]
// ]

// Copying Objects:
const copiedPerson = Object.assign({}, person);
const spreadCopiedPerson = { ...person };

// Object Equality:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

//Time complexity

// Insertion: O(1)
// Removal: O(1)
// Accessing: O(1)
// Searching: O(n)
// Modification: O(n)
// Iteration: O(n)

// Object.keys() : O(n)
// Object.values() : O(n)
// Object.entries() : O(n)
