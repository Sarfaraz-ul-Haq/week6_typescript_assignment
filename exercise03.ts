//Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

function convertDaysToWeeksAndDays(days: number) {
  const weeks = Math.floor(days / 7);
  const remainingDays = days % 7;

  if (days < 7) {
    console.log(`Given days is less than 7`);
  } else if (weeks < 2 && remainingDays < 2) {
    console.log(
      `Given days is equal to ${weeks} week and ${remainingDays} day`
    );
  } else if (weeks > 1 && remainingDays > 1) {
    console.log(
      `Given days is equal to ${weeks} weeks and ${remainingDays} days`
    );
  } else if (weeks < 2 && remainingDays > 1) {
    console.log(
      `Given days is equal to ${weeks} week and ${remainingDays} days`
    );
  } else {
    console.log(
      `Given days is equal to ${weeks} weeks and ${remainingDays} day`
    );
  }
}

convertDaysToWeeksAndDays(5); // Given days is less than 7

convertDaysToWeeksAndDays(24); // Given days is equal to 3 weeks and 3 days

convertDaysToWeeksAndDays(50); // Given days is equal to 7 weeks and 1 day

convertDaysToWeeksAndDays(300); // Given days is equal to 42 weeks and 6 days
