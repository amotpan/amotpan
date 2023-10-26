// Define two variables
var a = 5;
var b = 10;

// Display the initial values
console.log("Initial values:");
console.log("a = " + a);
console.log("b = " + b);

// Swap the values of a and b without a temporary variable
[a, b] = [b, a];

// Display the swapped values
console.log("Swapped values:");
console.log("a = " + a);
console.log("b = " + b);
