//Set Data Structure

//A set is a collection of unique values. Sets are created using the set() method.
//Set can contain a mix of different data types. (string, number, object, etc.)
//Sets are iterable.
//set() method returns a new set.
//Sets are dynamically sized.
//Sets are unordered.
// Sets are useful when you want to maintain a collection of unique items and perform operations such as adding, deleting, or checking the existence of elements.

//Create a set
const uniqueNumbers = new Set();
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
uniqueNumbers.add(2); //Duplicate values are ignored

//Creating a set from an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const uniqueNumbers2 = new Set(numbers);

//Creating a set with initial values
const colors = new Set(["red", "green", "blue"]);

// Checking if an Element Exists in a Set:
console.log(uniqueNumbers.has(2)); // Output: true
console.log(colors.has("yellow")); // Output: false

// Adding and Deleting Elements in a Set:
uniqueNumbers.add(4);
uniqueNumbers.delete(3);

// Getting the Size of a Set:
console.log(uniqueNumbers.size); // Output: 3

// Iterating a Set:
uniqueNumbers.forEach((number) => console.log(number));

for (const number of uniqueNumbers) {
  console.log(number);
}

// Set Methods:
const fruits = new Set(["apple", "banana", "orange"]);

// Converting a Set to an Array:
const fruitsArray = Array.from(fruits);

// Converting a Set to a String:
const fruitsString = fruitsArray.join(",");
console.log(fruitsString);

// Clearing All Elements from a Set:
fruits.clear();

// Set Operations:
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

// Union (Combining Sets):
const union = new Set([...setA, ...setB]);

// Intersection (Common Elements):
const intersection = new Set([...setA].filter((element) => setB.has(element)));

// Difference (Elements in setA but not in setB):
const difference = new Set([...setA].filter((element) => !setB.has(element)));

// Set Time Complexity:

// Insertion: O(1)
// Deletion: O(1)
// Searching: O(n)
// Iteration: O(n)

//Sets do not have indexing, so there is no direct way to access elements by their position.
//Sets are primarily used for maintaining collections of unique values. If you need to store key-value pairs, consider using a Map.
//Sets are not guaranteed to maintain insertion order. If order is important, consider using an Array or a Map.
//Sets are often used to remove duplicate values from an array by converting the array to a Set and then back to an array.
