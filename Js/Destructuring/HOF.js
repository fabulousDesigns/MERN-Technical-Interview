// double function

const double = (x) => {
  return x * 2;
};

console.log(double(10));

// 🔹 1. map() – Transforming Data
// Purpose: map() is used to transform each element in an array and return a new array with the same length.

// Syntax
// const newArray = oldArray.map((element, index, array) => {
//     return transformedElement;
//   });

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((n) => n * n);

console.log(squaredNumbers);

// 🔹 How map() is used in React
// One of the most common uses of map() in React is rendering lists dynamically.

// ✅ Example: Rendering a list of users
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// function UserList() {
//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }
//! 🔸 Here, map() helps us iterate over an array and return a list of <li> elements.

//? 🔹 2. filter() – Extracting Specific Data
// * Purpose: filter() is used to create a new array containing only elements that pass a given condition.
// syntax
// const filteredArray = originalArray.filter((element, index, array) => {
//   return condition;
// });

const filteredNumbers = squaredNumbers.filter((n) => n > 5);

console.log(filteredNumbers);
// 🔹 How filter() is used in React
// Common use cases in React:

// Filtering search results
// Hiding/showing items based on user input
// ✅ Example: Filter users whose name starts with "A"
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Adam" },
];

const filteredUsers = users.filter((names) => names.name.startsWith("A"));
console.log(filteredUsers);

// 🔹 3. reduce() – Aggregating Data

// Purpose: reduce() is used to take an array and reduce it to a single value (e.g., sum, average, object accumulation, etc.).

// syntax:
// const result = array.reduce((accumulator, currentValue, index, array) => {
//     return updatedAccumulator;
//   }, initialValue);

//  Example: Sum all numbers in an array

const sum = filteredNumbers.reduce((acc, num) => acc + num, 0);

console.log(sum);

// 🔹 How reduce() is used in React
// Aggregating totals (e.g., calculating total price in a shopping cart)
// Grouping data
// ✅ Example: Calculating total price in a shopping cart

const cart = [
  { id: 1, item: "Laptop", price: 1000 },
  { id: 2, item: "Mouse", price: 50 },
  { id: 3, item: "Keyboard", price: 150 },
];

let totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

console.log(totalPrice);

// * Write a function that filters out even numbers and maps them to their squares.

const testArr = [12, 5, 6, 7, 9, 0, 4, 25, 17, 47, 72, 54, 22, 24, 10];

const highOrderFunction = (arr) => {
  let result = arr.filter((even) => even % 2 == 0).map((n) => n * n);

  return result;
};

console.log(highOrderFunction(testArr));
