// Get the age from the user
var age = parseInt(prompt("Enter the age:"));

// Use the ternary operator to categorize the age
var category = (age < 18) ? "child" : (age < 65) ? "adult" : "senior";

// Display the category
console.log("The person is a " + category + ".");
