/**
 *
 * @param {Assignment 1: Basic Array Destructuring
Task: Create a function called swapValues that takes an array of two elements and returns a new array with the elements swapped.
javascriptCopy// Example:
// Input: [1, 2]
// Output: [2, 1]

function swapValues(arr) {
  // Your code here
  // Use array destructuring to swap the values
}
Requirements:

Use array destructuring to solve this
Don't modify the original array
Return a new array with swapped values
If the array doesn't contain exactly 2 elements, return the original array} arr
 * @returns
 */

function swapValues(arr) {
  if (arr.length !== 2) {
    return arr;
  }

  let [swap1, swap2] = arr;
  return [swap2, swap1];
}

let nums = [2, 4];

console.log(swapValues(nums));
