"use strict";
//Write a program that calculates the percentage.
Object.defineProperty(exports, "__esModule", { value: true });
function calculatePercentage(part, whole) {
    let percentage = (part / whole) * 100;
    console.log(percentage, "%");
}
calculatePercentage(75, 100); //prints 75
