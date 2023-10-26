// Define an array of numbers
var numbers = [2, 4, 6, 5, 8, 10, 11, 12, 14, 15, 18];

// Initialize an index variable
var index = 0;

// Use a while loop to find the first odd number
while (index < numbers.length) {
    if (numbers[index] % 2 !== 0) {
        console.log("The first odd number found is: " + numbers[index]);
        break; // Exit the loop when an odd number is found
    }
    index++;
}
