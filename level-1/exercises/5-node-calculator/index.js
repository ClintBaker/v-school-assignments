const readline = require("readline-sync");

// Handle the operator
const operators = ["Add", "Subtract", "Divide", "Multiply"];
const operator = readline.keyInSelect(operators, "Chose your function:");

if (operators[operator]) {
  console.log(`Ok, let's ${operators[operator]}`);
  // Select num1
  const num1 = readline.question("what the first number?");
  // Validate num1 is number
  if (isNaN(num1)) {
    console.log("That's not a number!  Please try again.");
  } else {
    console.log(`First number is ${num1}`);
    //   Select num2
    const num2 = readline.question("what's the second number?");
    //   Validate num2 is number
    if (isNaN(num2)) {
      console.log("That's not a number!  Please try again.");
    } else {
      console.log(`Number two is ${num2}`);
      // Switch statement that determines which function, performs the function, and prints result
      switch (operators[operator]) {
        case "Add":
          console.log("Your result is:");
          console.log(add(num1, num2));
          break;
        case "Subtract":
          console.log("Your result is:");
          console.log(subtract(num1, num2));
          break;
        case "Multiply":
          console.log("Your result is:");
          console.log(multiply(num1, num2));
          break;
        case "Divide":
          console.log("Your result is:");
          console.log(divide(num1, num2));
          break;
        default:
          console.log("I'm not familiar with this function, goodbye!");
          break;
      }
    }
  }
} else {
  console.log("You cancelled!  Thanks for shopping with CLCalculator9000");
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}
