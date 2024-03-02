// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.

// function to convert C to F
// F = (9 / 5) * C + 32;

function toFahrenheit(tempCelsius: number) {
  let F = (9 / 5) * tempCelsius + 32;
  console.log(Math.round(F));
}

// function to convert F to C
// C = (5/9) * (F - 32)
function toCelcius(tempFahrenheit: number) {
  let C = (5 / 9) * (tempFahrenheit - 32);
  console.log(Math.round(C));
}

// Now using these functions
let tempInFahrenheit = 95;
let tempInCelcius = 20;

toCelcius(tempInFahrenheit);
toFahrenheit(tempInCelcius);
