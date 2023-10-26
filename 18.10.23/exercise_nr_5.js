// Define two variables
var num1 = 5;      // This variable holds a numeric value.
var num2 = "5";    // This variable holds a string value that looks like a number.

// Compare using === (strict equality)
if (num1 === num2) {
    console.log("Using '===': The two variables are equal in both value and data type.");
} else {
    console.log("Using '===': The two variables are NOT equal in both value and data type.");
}

// Compare using == (loose equality)
if (num1 == num2) {
    console.log("Using '==': The two variables are equal in value (loose equality).");
} else {
    console.log("Using '==': The two variables are NOT equal in value (loose equality).");
}
