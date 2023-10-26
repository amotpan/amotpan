// Receive two numbers from the user
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));

// Compare the two numbers
if (num1 > num2) {
    console.log("The first number (" + num1 + ") is greater than the second number (" + num2 + ").");
} else if (num2 > num1) {
    console.log("The second number (" + num2 + ") is greater than the first number (" + num1 + ").");
} else {
    console.log("The two numbers are equal.");
}
