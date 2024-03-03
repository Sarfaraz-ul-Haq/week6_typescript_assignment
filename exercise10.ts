// //Write a program that takes the number of units consumed by a user. If it is greater than 100 then add 10% tax, if it is greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax

function calculateTax(unitsConsumedByUser: number): string {
  let tax: string;

  if (unitsConsumedByUser > 100 && unitsConsumedByUser <= 200) {
    tax = "10%";
    return `Tax applied: ${tax}`;
  } else if (unitsConsumedByUser > 200 && unitsConsumedByUser <= 500) {
    tax = "15%";
    return `Tax applied: ${tax}`;
  } else if (unitsConsumedByUser > 500) {
    tax = "25%";
    return `Tax applied: ${tax}`;
  } else {
    return "There is no tax when consumed units are less than or equal to 100";
  }
}

const unitsConsumedByUser = 250;
const calculatedTax = calculateTax(unitsConsumedByUser);
console.log(calculatedTax);
