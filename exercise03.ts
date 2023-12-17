//Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

function convertDaysToWeeksAndDays(inputDays: number) {
  let weeks;
  let remainingDays;
  weeks = Math.floor(inputDays / 7);
  remainingDays = inputDays % 7;
  console.log(
    `Given days is equal to ${weeks} weeks and ${remainingDays} days.`
  );
}

convertDaysToWeeksAndDays(50); //prints "Given days is equal to 7 weeks and 1 days."

convertDaysToWeeksAndDays(25); //prints "Given days is equal to 3 weeks and 4 days."
