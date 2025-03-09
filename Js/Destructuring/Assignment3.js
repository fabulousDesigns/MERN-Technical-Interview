/**
 * Assignment 3: Function Parameter Destructuring with Rest/Spread
Task: Shopping Cart Processor
Objective: Create a function called processOrder that processes shopping cart items and returns order information.
javascriptCopy// Example data:
const cartItems = [
  { id: 1, name: "Laptop", price: 999.99, quantity: 1 },
  { id: 2, name: "Headphones", price: 99.99, quantity: 2 },
  { id: 3, name: "Mouse", price: 29.99, quantity: 1 },
  { id: 4, name: "Keyboard", price: 59.99, quantity: 1 }
];

// Function signature:
function processOrder({ items, customerInfo = { name: "Guest" }, ...orderOptions }) {
  // Your code here

  // 1. Destructure the first 2 items from the items array
  // 2. Use the rest operator to collect remaining items
  // 3. Calculate total price for all items
  // 4. Return formatted order information
}
Requirements:

Use destructuring directly in the function parameters
Use array destructuring with rest operator to handle the cart items
Calculate the total price of all items (price × quantity)
Apply a discount if specified in orderOptions
Return an object with:

customer: The customer's name
mainItems: Names of the first two items
additionalItems: Count of remaining items
total: The final total after any discount
Any other orderOptions as properties



Example Call:
javascriptCopyconst orderSummary = processOrder({
  items: cartItems,
  customerInfo: { name: "John Smith" },
  discount: 10,
  expeditedShipping: true
});
Expected Output:
javascriptCopy{
  customer: "John Smith",
  mainItems: ["Laptop", "Headphones"],
  additionalItems: 2,
  total: 1169.95, // 10% off the total of all items
  discount: 10,
  expeditedShipping: true
}
 */

// Example data:
const cartItems = [
  { id: 1, name: "Laptop", price: 999.99, quantity: 1 },
  { id: 2, name: "Headphones", price: 99.99, quantity: 2 },
  { id: 3, name: "Mouse", price: 29.99, quantity: 1 },
  { id: 4, name: "Keyboard", price: 59.99, quantity: 1 },
];

// Function signature:
function processOrder({
  items,
  customerInfo = { name: "Guest" },
  ...orderOptions
}) {
  // Destructure the first 2 items and the rest
  const [item1, item2, ...rest] = items;

  // Extract just the names for mainItems
  const mainItems = [item1, item2].map((item) => item?.name).filter(Boolean);

  // Calculate total price (price × quantity for all items)
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }

  // Apply discount if specified in orderOptions
  if (orderOptions.discount) {
    total = total * (1 - orderOptions.discount / 100);
  }

  // Round to 2 decimal places
  total = parseFloat(total.toFixed(2));

  // Return the formatted result
  return {
    customer: customerInfo.name,
    mainItems,
    additionalItems: rest.length,
    total,
    ...orderOptions, // Include all order options
  };
}
