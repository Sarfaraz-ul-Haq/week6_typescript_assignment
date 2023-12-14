"use strict";
//Write a program that takes the number of units consumed by a user. If it is greater than 100 then add 10% tax, if it is greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
Object.defineProperty(exports, "__esModule", { value: true });
//The tax amount will be calculated by the amount of bill.
let unitsConsumedByUser = 501;
let tax;
if (unitsConsumedByUser > 100 && unitsConsumedByUser <= 200) {
    tax = "10%";
    console.log(tax);
}
else if (unitsConsumedByUser > 200 && unitsConsumedByUser <= 500) {
    tax = "15%";
    console.log(tax);
}
else if (unitsConsumedByUser > 500) {
    tax = "25%";
    console.log(tax);
}
else {
    console.log("There is no tax when consumed units are less than or equal to 100");
}
