//Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.

//Sunday = Day 0

function getDayName(userInput: number): string {
  if (userInput === 0) {
    return "Sunday";
  } else if (userInput === 1) {
    return "Monday";
  } else if (userInput === 2) {
    return "Tuesday";
  } else if (userInput === 3) {
    return "Wednesday";
  } else if (userInput === 4) {
    return "Thursday";
  } else if (userInput === 5) {
    return "Friday";
  } else if (userInput === 6) {
    return "Saturday";
  } else {
    return "Invalid input";
  }
}

console.log(getDayName(0)); // returns "Sunday"
console.log(getDayName(5)); // returns "Friday"
console.log(getDayName(10)); // return "Invalid input"
