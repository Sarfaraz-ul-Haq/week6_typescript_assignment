// Write a program that checks if the given number is divisible by 3 or 5 or both or not divisible by anyone show output accordingly.

// function to check whether the given number is divisble by three or five or both
function isDivisbleByThreeOrFiveOrBoth(userInput: number) {
  if (userInput % 3 === 0 && userInput % 5 !== 0) {
    console.log("The given number is divisible by 3");
  } else if (userInput % 5 === 0 && userInput % 3 !== 0) {
    console.log("The given number is divisble by 5");
  } else if (userInput % 3 === 0 && userInput % 5 === 0) {
    console.log("The given number is divisible by both 3 and 5");
  } else {
    console.log("The given number is not divisble by 3 and 5");
  }
}

isDivisbleByThreeOrFiveOrBoth(12);
isDivisbleByThreeOrFiveOrBoth(50);
isDivisbleByThreeOrFiveOrBoth(15);
isDivisbleByThreeOrFiveOrBoth(22);
