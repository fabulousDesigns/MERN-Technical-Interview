// An array with name and surname
let arr = ["John", "Smith"];

// Destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]

let [firstName, surname] = arr;
//console.log(firstName) //!-> John
//console.log(surname)  //!-> Smith

// Ignore elements using commas
// ? In the code below, the second element of the array is skipped, the third one is assigned to title, and the rest of the array items are also skipped (as there are no variables for them).

let [name, , titleDefault] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
//console.log(titleDefault) //! -> Consul

// * Works with any iterable on the right-side
// We can use any “iterable” on the right side of the assignment:
// Array
// String
// Set
// Map
// TypedArray
// arguments object
// NodeList object

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]); // [1, 2, 3]

//? That works, because internally a destructuring assignment works by iterating over the right value. It’s a kind of syntax sugar for calling for..of over the value to the right of = and assigning the values.

// Assign to anything at the left-side
// We can use any “assignables” at the left side.

let user = {};
[user.name, user.surname] = "John Smith".split(" ");
console.log(user.name); // John
console.log(user.surname); // Smith

//! -> Object.entries(obj)
//!-> When we need to iterate over an object, we can use the Object.entries method followed by destructuring.

const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

const entries = Object.entries(obj);
console.log(entries); //! -> [ ["name", "John"], ["age", 30], ["city", "New York"] ]

// Loop over the entries
for (let [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`); // name: John, age: 30, city: New York
}
// The similar code for a Map is simpler, as it’s iterable:

let userMap = new Map();
userMap.set("name", "John");
userMap.set("age", "30");
userMap.set("city", "New York");

for (let [key, value] of userMap) {
  console.log(`${key}: ${value}`); // name: John, age: 30, city: New York
}

// Swapping variables trick using destructuring
// There’s a well-known trick for swapping values of variables using a destructuring assignment:

let guest = "Jane";
let admin = "Pete";

// log before swap
console.log(guest); // Jane
console.log(admin); // Pete

// swap
[guest, admin] = [admin, guest];

// log after swap
console.log(guest); // Pete
console.log(admin); // Jane

// * rest "..."
// If we want not just to get first values, but also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "...":

let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
//console.log(name1); // Julius
//console.log(name2); // Caesar
//console.log(rest[0]); // Consul
//console.log(rest[1]); // of the Roman Republic
//console.log(rest.length); // 2

// Default values
// If there are fewer values in the array than variables in the assignment, there’ll be no error:

let [firstName1, surname1] = [];
//console.log(firstName1); // undefined
//console.log(surname1); // undefined

// If we want a “default” value to replace the missing one, we can provide it using =:

let [name3 = "Guest", surname3 = "Anonymous"] = ["Julius"];
//console.log(name3); // Julius (from array)
//console.log(surname3); // Anonymous (default used)

// Default values can be more complex expressions or even function calls. They are evaluated if the value is not provided.

// let [name4 = prompt("name?"), surname4 = prompt("surname?")] = ["Julius"];
//console.log(name4); // Julius (from array)
//console.log(surname4); // result of prompt

// Object destructuring
// The destructuring assignment also works with objects.

let options = {
  title: "Menu",
  width: 100,
  height: 200,
};

let { title, width, height } = options;
//console.log(title); // Menu
//console.log(width); // 100
//console.log(height); // 200

// The order does not matter
// The order of properties in {…} does not matter. For objects, they are assigned by property name.

let { height1, width1, title1 } = { title1: "Menu", height1: 200, width1: 100 };
//console.log(title1); // Menu
//console.log(width1); // 100
//console.log(height1); // 200

// We can use any names for the variables.
// The property names can be mentioned in any order in {…}.
// Here, the property title goes to the variable name, width goes to width and height to the variable height.

let {
  height2: h,
  width2: w,
  title2,
} = { title2: "Menu", height2: 200, width2: 100 };
//console.log(title2); // Menu
//console.log(w); // 100

// For potentially missing properties we can set default values using “=”
// If we try to destructure a non-existing property, there will be an error.

let options1 = {
  title3: "Menu",
};

let { width3 = 100, height3 = 200, title3 } = options1;
//console.log(title3); // Menu
//console.log(width3); // 100
//console.log(height3); // 200

// Nested destructuring
// If an object or an array contain other nested objects and arrays, we can use more complex left-side patterns to extract deeper portions.

let options2 = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

// destructuring assignment on multiple lines for clarity
let {
  size: {
    // put size here
    width4,
    height4,
  },
  items: [item1, item2], // assign items here
  title4 = "Menu", // not present in the object (default value is used)
} = options2;

//console.log(title4); // Menu
//console.log(width4); // 100
//console.log(height4); // 200
//console.log(item1); // Cake
//console.log(item2); // Donut

// Smart function parameters
// There are times when a function may have many parameters, most of which are optional, and have defaults.

// It’s especially common when a function has a lot of optional options. The configuration object is passed to the function “just in case”, but most of the time we don’t care about its contents.

// The function can use destructuring assignment with a default value to make working with the parameters easier.

// We pass user as an object, and the function immediately extracts the properties into variables:

let options3 = {
  title5: "My menu",
  items5: ["Item1", "Item2"],
};

function showMenu({
  title5 = "Untitled",
  width5: w = 100, // width: w
  height5: h = 200, // height: h
  items5: [item11, item22], // items: [item1, item2]
}) {
  // title, items – taken from options,
  // width, height – defaults used
  console.log(`${title5} ${w} ${h}`); // My Menu 100 200
  console.log(item11); // Item1
  console.log(item22); // Item2
}

showMenu(options3);

// The function receives the whole options object, but immediately destructurizes it into variables:

// title5 becomes a variable with the same name from options.title (if the property is absent, then the default value "Untitled" is used),

// items5 becomes a variable with the same name from options.items,

// width5 and height5 become variables width5 and height5 from options with default values.

// The destructuring assignment helps to keep the code shorter and more readable, especially when the function has a lot of parameters.

// Summary

// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

// Destructuring also works great with complex functions that have a lot of parameters, default values, and so on.

// There’s a lot more to learn about destructuring, especially when we combine it with functions. We’ll see more examples in the future chapters.

// We can use destructuring in a function parameter list, for more convenient access to function parameters.

// We can use destructuring to iterate over key/value pairs of an object.

// We can use destructuring to get the value of a Map entry.

// We can use destructuring to get the value of a Set element.

// We can use destructuring to get the value of an array element.

// We can use destructuring to swap variables.

// We can use destructuring to ignore some values.

// We can use destructuring to get the rest of the values.

// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)

let User = { name: "John", years: 30 };
let { namePassed, years: age, isAdmin = false } = User;

console.log(namePassed); // John
console.log(age); // 30
console.log(isAdmin); // false

// // There is a salaries object:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// Write the destructuring assignment that reads:
// John’s salary into the variable John.
// Ann’s salary into the variable Ann.
// Pete’s salary into the variable Pete.
// And then sum everything and store in the variable sum.

let { John, Ann, Pete } = salaries;
let sum = John + Ann + Pete;
console.log(sum); // 390

// figure out who has the highest salary
let maxSalary = 0;
let maxPaid = null;

let entriesSalaries = Object.entries(salaries);

for ([key, value] of entriesSalaries) {
  if (value > maxSalary) {
    maxSalary = value;
    maxPaid = key;
  }
}
console.log("maxPaid: " + maxPaid);
