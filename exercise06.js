"use strict";
//Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
Object.defineProperty(exports, "__esModule", { value: true });
//Very Cold: Below 0°C
//     Cold: 0°C to 10°C
//     Cool: 10°C to 18°C
//     Mild: 18°C to 24°C
//     Warm: 24°C to 29°C
//      Hot: 29°C
let tempInput = -2;
if (tempInput < 0) {
    console.log("You must wear warm clothes as the weather is very cold.");
}
else if (tempInput >= 0 && tempInput <= 10) {
    console.log("You need to wear warm clothes as the weather is cold.");
}
else if (tempInput >= 10 && tempInput <= 18) {
    console.log("You need to wear some warm clothes as the weather is cool.");
}
else if (tempInput >= 18 && tempInput <= 24) {
    console.log("You don't need to wear warm clothes as the weather is not cold.");
}
else if (tempInput >= 24 && tempInput <= 29) {
    console.log("You don't need to wear warm clothes as the weather is warm.");
}
else {
    console.log("You don't need warm clothes in hot weather");
}
