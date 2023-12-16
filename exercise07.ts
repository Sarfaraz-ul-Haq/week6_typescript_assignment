//Write a program that checks if the given number is divisible by 3 or 5 or both or not divisible by anyone show output accordingly.

//Function to check if the given number is divisble by three or give
function isDivisbleByThreeOrFiveOrBoth(userInput: number): void {
  if (userInput % 3 == 0 && userInput % 5) {
    console.log("Given number is divisble by both.");
  } else if (userInput % 3 == 0) {
    console.log("Given number is divisible by three.");
  } else if (userInput % 5 == 0) {
    console.log("Given number is divisble by five.");
  } else {
    console.log("Given number is not divible by five.");
  }
}
//Now using the "isDivisibleByThreeOrFiveOrBoth" function
isDivisbleByThreeOrFiveOrBoth(30); //prints "Given number is divisible by three."
isDivisbleByThreeOrFiveOrBoth(18); //prints "Given number is divisble by both."
isDivisbleByThreeOrFiveOrBoth(50); //prints "Given number is divisble by five."
