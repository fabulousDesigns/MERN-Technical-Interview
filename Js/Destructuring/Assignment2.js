/**
 * Assignment 2: Object Destructuring with Default Values
Task: User Profile Extractor
Objective: Create a function called extractUserInfo that takes a user object and returns formatted user information, handling missing data gracefully.
javascriptCopy// Example user object:
const user = {
  name: {
    first: "John",
    last: "Doe"
  },
  contact: {
    email: "john.doe@example.com",
    phone: "555-1234"
  },
  preferences: {
    theme: "dark"
  }
  // Note: Some users might be missing certain properties
};

function extractUserInfo(user) {
  // Your code here
  // Use object destructuring to extract:
  // 1. First and last name (with default values of "Unknown")
  // 2. Email (default "No email provided")
  // 3. Phone (default "No phone provided")
  // 4. Theme preference (default "light")

  // Return an object with formatted properties:
  // fullName, contactInfo, and theme
}
Requirements:

Use object destructuring with default values
Handle nested objects
Rename at least one variable during destructuring
Return a new object with these properties:

fullName: Combination of first and last name
contactInfo: String that includes both email and phone
theme: The theme preference



Example Output:
javascriptCopy{
  fullName: "John Doe",
  contactInfo: "Email: john.doe@example.com, Phone: 555-1234",
  theme: "dark"
}
 */

// Example user object:
const user = {
  name: {
    first: "John",
    last: "Doe",
  },
  contact: {
    email: "john.doe@example.com",
    phone: "555-1234",
  },
  preferences: {
    theme: "dark",
  },
  // Note: Some users might be missing certain properties
};

function extractUserInfo(user) {
  // Destructure with proper defaults for nested properties
  const {
    name: { first = "Unknown", last = "Unknown" } = {},
    contact: { email = "No email provided", phone = "No phone provided" } = {},
    preferences: { theme = "light" } = {},
  } = user || {};

  return {
    fullName: `${first} ${last}`,
    contactInfo: `Email: ${email}, Phone: ${phone}`,
    theme: theme,
  };
}

console.log(extractUserInfo(user));
