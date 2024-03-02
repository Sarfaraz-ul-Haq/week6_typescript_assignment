//Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.

//Very Cold: Below 0°C
//     Cold: 0°C to 10°C
//     Cool: 10°C to 18°C
//     Mild: 18°C to 24°C
//     Warm: 24°C to 29°C
//      Hot: 29°C

function suggestClothing(temperatureInput: number) {
  if (temperatureInput < 0) {
    console.log("You must wear warm clothes as the weather is very cold.");
  } else if (temperatureInput >= 0 && temperatureInput <= 10) {
    console.log("You need to wear warm clothes as the weather is cold.");
  } else if (temperatureInput >= 10 && temperatureInput <= 18) {
    console.log("You need to wear some warm clothes as the weather is cool.");
  } else if (temperatureInput >= 18 && temperatureInput <= 24) {
    console.log(
      "You don't need to wear warm clothes as the weather is not cold."
    );
  } else if (temperatureInput >= 24 && temperatureInput <= 29) {
    console.log("You don't need to wear warm clothes as the weather is warm.");
  } else {
    console.log("You don't need warm clothes in hot weather");
  }
}

suggestClothing(-1); // You must wear warm clothes as the weather is very cold.

suggestClothing(15); // You need to wear some warm clothes as the weather is cool.

suggestClothing(28); // You don't need to wear warm clothes as the weather is warm.
