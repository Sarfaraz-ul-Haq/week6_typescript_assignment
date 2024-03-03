// Write a program that checks if the given year is leap year or not.

function isLeapYear(givenYear: number): boolean {
  let leapYear = false;
  if (givenYear === 366) {
    leapYear = true;
  } else if (givenYear === 365) {
    leapYear = false;
  }
  return leapYear;
}

isLeapYear(365); // returns false
isLeapYear(366); // returns true
isLeapYear(360); // returns false
