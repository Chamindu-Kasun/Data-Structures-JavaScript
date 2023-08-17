//Map Data Structure

//A map is an ordered collection of key-value pairs.
//Each key is unique.
//Both keys and values can be of any type.
//Corresponding key can be used to retrieve the corresponding value.
//Maps are iterable.

//Maps are commonly used when you need to store key-value pairs and maintain a specific order of insertion.
//Maps provide a reliable way to iterate through key-value pairs without worrying about keys being in a specific order.
//Maps can be more performant and predictable than using objects for storing key-value pairs.

//Object vs Map

//(1) Objects are unordered wheres maps are ordered

// Objects: Starting from ECMAScript 2015 (ES6), objects do maintain the insertion order for their own properties.
//          This behavior was not guaranteed in previous versions of JavaScript.
//          In modern JavaScript, when you iterate over the properties of an object using a loop or Object.keys(), you will generally receive them in the order they were added.

// Maps: Maps, introduced in ES6, explicitly guarantee the order of key-value pairs based on the insertion order.
//       When you iterate through a map using its forEach() method or other iteration methods, the order of elements will match the order in which they were added.

const person = {
  firstName: "John",
  age: 30,
  lastName: "Doe",
};

for (const key in person) {
  console.log(key); // Output order may vary, e.g., "firstName", "age", "lastName"
}

const myMap = new Map();
myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("c", 3);

myMap.forEach((value, key) => {
  console.log(key, value); // Output order: "a" 1, "b" 2, "c" 3
});

//(2) Keys in objects can only be string or symbol type whereas keys in maps can be any type(ncluding primitive data types, objects, and functions).

// Creating a Map with keys of various types
const mixedKeysMap = new Map();

// Using different types as keys
const stringKey = "stringKey";
const numberKey = 42;
const objectKey = { name: "John" };
const functionKey = () => console.log("Hello!");

// Adding key-value pairs to the map
mixedKeysMap.set(stringKey, "Value for string key");
mixedKeysMap.set(numberKey, "Value for number key");
mixedKeysMap.set(objectKey, "Value for object key");
mixedKeysMap.set(functionKey, "Value for function key");

// Getting values using different types of keys
console.log(mixedKeysMap.get(stringKey)); // Output: "Value for string key"
console.log(mixedKeysMap.get(numberKey)); // Output: "Value for number key"
console.log(mixedKeysMap.get(objectKey)); // Output: "Value for object key"
console.log(mixedKeysMap.get(functionKey)); // Output: "Value for function key"

//(3) Maps are iterable whereas objects are not. (not directly iterable , Can convert them to an iterable format using methods like Object.keys())
//(4) You can attach functionality to an object whereas maps are restricted to storing data

//while you cannot directly attach functions to Map keys, you can use keys to access functions stored in the values of the Map.

// Creating a Map to store functions with descriptive keys
const functionMap = new Map();

// Adding functions to the map
functionMap.set("add", (a, b) => a + b);
functionMap.set("subtract", (a, b) => a - b);
functionMap.set("multiply", (a, b) => a * b);
functionMap.set("divide", (a, b) => a / b);

// Accessing and using functions stored in the map
const operation = "multiply";
const num1 = 5;
const num2 = 3;

if (functionMap.has(operation)) {
  const selectedFunction = functionMap.get(operation);
  const result = selectedFunction(num1, num2);
  console.log(`The result of ${operation} is ${result}`);
} else {
  console.log(`No function found for operation: ${operation}`);
}

//(5) The number of items in an object must be determined manually where as it is readily available with size property in map

const personNew = {
  firstName: "John",
  age: 30,
  lastName: "Doe",
};

let count = 0;
for (const key in personNew) {
  count++;
}
console.log(count); // Output: 3 (number of key-value pairs)

const myMapNew = new Map();
myMapNew.set("a", 1);
myMapNew.set("b", 2);
myMapNew.set("c", 3);

console.log(myMapNew.size); // Output: 3 (number of key-value pairs)

//Creating a map

const student = new Map();
student.set("firstName", "John");
student.set("lastName", "Doe");
student.set("age", 30);

// Creating a Map with Initial Values:
const colors = new Map([
  ["red", "#FF0000"],
  ["green", "#00FF00"],
  ["blue", "#0000FF"],
]);

// Checking if a Key Exists in a Map:
console.log(student.has("firstName")); // Output: true
console.log(colors.has("yellow")); // Output: false

// Getting the Value for a Key:
console.log(student.get("firstName")); // Output: "John"

// Deleting a Key-Value Pair from a Map:
student.delete("age");

// Getting the Size of a Map:
console.log(student.size); // Output: 2

// Iterating Through a Map:

student.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

for (const [key, value] of colors) {
  console.log(`${key}: ${value}`);
}

// Map Methods:
const fruits = new Map([
  ["apple", 3],
  ["banana", 2],
  ["orange", 5],
]);

// Converting a Map to an Array of Key-Value Pairs:
const fruitsArray = Array.from(fruits);

// Clearing All Key-Value Pairs from a Map:
fruits.clear();

// Map Time Complexity:

// Insertion: O(1)
// Deletion: O(1)
// Searching: O(n)
// Iteration: O(n)
