//Write a program that calculates the percentage.

function calculatePercentage(part: number, whole: number): number {
  let percentage = (part / whole) * 100;
  return percentage;
}

const percentage = calculatePercentage(75, 100);
console.log(percentage); //prints 75
