// Get a number from the user
var dayNumber = parseInt(prompt("Enter a number from 1 to 7:"));

// Initialize a variable to store the day of the week
var dayName;

// Use a switch statement to determine the day of the week
switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "The entered number does not correspond to a valid day";
        break;
}

// Display the result
console.log("The day of the week corresponding to the number " + dayNumber + " is: " + dayName);
