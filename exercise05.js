"use strict";
//Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
Object.defineProperty(exports, "__esModule", { value: true });
let userAge = 20;
if (userAge > 0 && userAge <= 12) {
    console.log("Child");
}
else if (userAge >= 13 && userAge <= 19) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}
