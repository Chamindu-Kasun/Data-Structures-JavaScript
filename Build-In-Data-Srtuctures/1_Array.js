//Array Data Structure

//An array is a fundamental data structure in programining that allows you to store and
//manage a collection of elements. Arrays provide a convienient way to work with multiple
//values of the same type, and they can contain a mix of different data types as well.
//In JavaScript, arrays are a versatile tool, providing a variety of methods to manipulate
//and access their elements.

const arr = [1, 2, 3, 4, 5, "Chamindu"];

//Adding and Removing Elements:
//To push an element to the end of the array
arr.push("Kasun");

//To pop an element from the end of the array
arr.pop("1");
//Time complexity of insert remove from end is O(1)

//To shift an element from the start of the array
arr.shift("1");

//To unshift an element to the start of the array
arr.unshift("1");
//Time complexity of insert remove from start is O(n)

//Accessing Elements:
//To get the index of an element
arr.indexOf("1");

//To get the last index of an element
arr.lastIndexOf("1");
// Time complexity of indexOf and lastIndexOf is O(n)

//Array Length:
//To get the length of the array
arr.length;
// Time complexity of length is O(1)

//Joining Array Elements:
// To join the array elements into a string
arr.join(" ");
// Time complexity of join is O(n)

//Manipulating Elements:
//To reverse the order of elements in the array
const reversedArray = arr.reverse();
// Time complexity of reverse is O(n)

//To sort the array elements
const sortedArrayAll = arr.sort();

const sortedArraySliced = arr.slice().sort();
// Time complexity of sort is O(n log n)

//Slicing and Splicing:
//To create a slice of the array (non-destructive)
const slicedArray = arr.slice(1, 4);

//To splice the array (can be used for insertion, deletion, or replacement)
const splicedArray = arr.splice(2, 1, "NewElement");

//Copying and Checking:
//To copy the array (non-destructive)
const copiedArray = arr.slice();

//To check if an element is included in the array
const isInclude = arr.includes("Chamindu");
// Time complexity of splice is O(n)

//Iterate the array
//Using a for loop:
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// Time complexity of for loop is O(n)

//Using a for...of loop:
for (const element of arr) {
  console.log(element);
}
// Time complexity of for...of loop is O(n)

// Iterate through the array and perform an action on each element
// Time complexity of forEach/map/filter/reduce is O(n)
//forEach:
arr.forEach((element) => {
  console.log(element * 2);
});

//map:
arr.map((element) => {
  return element * 2;
});

//filter:
const evenNumbers = arr.filter((element) => {
  return element % 2 === 0; // Filtering out odd numbers
});

//reduce:
const sum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; // Adding up all elements
}, 0); // Initial accumulator value is 0

//combine arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = array1.concat(array2);
// Time complexity of concat is O(n)

//Spread Operator:
const copiedArraySpread = [...arr];
