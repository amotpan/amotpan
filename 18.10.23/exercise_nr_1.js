function calculateAverage(num1, num2, num3) {
    // Calculate the arithmetic mean
    var average = (num1 + num2 + num3) / 3;
    
    // Return the result
    return average;
}

// Example usage of the function
var number1 = parseFloat(prompt("Enter the first number:"));
var number2 = parseFloat(prompt("Enter the second number:"));
var number3 = parseFloat(prompt("Enter the third number:"));

var result = calculateAverage(number1, number2, number3);

console.log("The arithmetic mean of the three numbers is: " + result);
