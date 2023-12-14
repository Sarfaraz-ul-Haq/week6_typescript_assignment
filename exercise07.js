"use strict";
//Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
Object.defineProperty(exports, "__esModule", { value: true });
let givenNumber = 6;
if (givenNumber % 3 == 0) {
    console.log("Divisble by 3");
}
else if (givenNumber % 5 == 0) {
    console.log("Divisble by 5");
}
else if (givenNumber % 3 == 0 && givenNumber % 5 == 0) {
    console.log("Divisible by both 3 and 5");
}
else {
    console.log("Not divisible by 3 or 5");
}
