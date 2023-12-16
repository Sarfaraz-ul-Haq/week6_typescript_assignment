//Write a program that checks if the given year is leap year or not.

function isLeapYear(givenYear: number): void {
  let leapYear;
  if (givenYear == 366) {
    console.log("Leap year");
  } else if (givenYear == 365) {
    console.log("Not a leap year");
  } else if (givenYear < 365) {
    console.log("Invalid input");
  } else if (givenYear > 366) {
    console.log("Invalid input");
  } else {
    console.log("Your input is not equal to 1 year.");
  }
}

//Now using isLeapYear function
let userInput = 366;
isLeapYear(userInput);
