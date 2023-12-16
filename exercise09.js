"use strict";
//Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
Object.defineProperty(exports, "__esModule", { value: true });
//Sunday = Day 0
function getDayName(userInput) {
    if (userInput == 0) {
        console.log("Sunday");
    }
    else if (userInput == 1) {
        console.log("Monday");
    }
    else if (userInput == 2) {
        console.log("Tuesday");
    }
    else if (userInput == 3) {
        console.log("Wednesday");
    }
    else if (userInput == 4) {
        console.log("Thursday");
    }
    else if (userInput == 5) {
        console.log("Friday");
    }
    else if (userInput == 6) {
        console.log("Saturday");
    }
    else {
        console.log("Invalid input!");
    }
}
//Now using the getDayName function
let userInput = 4;
getDayName(userInput);
