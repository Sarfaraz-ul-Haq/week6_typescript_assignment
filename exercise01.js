"use strict";
//Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
Object.defineProperty(exports, "__esModule", { value: true });
// //Make function to convert C to F
//F = (9 / 5) * C + 32;
function toFahrenheit(tempCelsius) {
    let F = (9 / 5) * tempCelsius + 32;
    console.log(Math.round(F));
}
//Make function to convert F to C
//C = (5/9) * (F - 32)
function toCelcius(tempFahrenheit) {
    let C = (5 / 9) * (tempFahrenheit - 32);
    console.log(Math.round(C));
}
//Now using these functions
let tempInFahrenheit = 95;
let tempInCelcius = 20;
toCelcius(tempInFahrenheit);
toFahrenheit(tempInCelcius);
