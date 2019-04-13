// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

//problem function 1:
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  console.log(cb(arr));
}

//cb:
function obtainLength(array) {
  return array.length;
}

//invocation:
getLength(items, obtainLength);

//problem function 2:
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  console.log(cb(arr));
}

//cb:
//writing callback as an anonymous arrow function
last(items, items => items[items.length -1]);
//Arrow functions are tricky for me, wanted to rewrite it for practice.
// last(items, items => {
//   return items[items.length -1];
// })

//problem function 3:
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  console.log(cb(x, y));
}

//cb:
function add(x, y) {
  return x + y;
}

//invocation:
sumNums(9, 5, add);


//problem function 4:
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  console.log(cb(x, y));
}

//Arrow function expression for practice.
//cb:
const multiply = (x, y) => x*y;

//invocation:
multiplyNums(5, 10, multiply);

//problem function 5:
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  console.log(cb(item, list));
}

//Since we are looking for 'item' in the 'list' and are looking to return a boolean value (true or false),
//I'll use array.includes().

//cb:
function arrayFilterCB(item, list) {
  return list.includes(item);
}

//invocation:
contains('Notebook', items, arrayFilterCB);
//2nd invocation to show cb functionality with boolean responses.
contains('Markers', items, arrayFilterCB);


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

