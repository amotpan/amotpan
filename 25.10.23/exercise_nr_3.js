// Get the number N from the user
var N = parseInt(prompt("Enter the value of N to display the first N even numbers:"));

// Check if N is a valid positive number
if (N <= 0) {
    console.log("Please enter a positive number greater than zero.");
} else {
    // Use a for loop to display the first N even numbers
    for (var i = 1; i <= N; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
