// Write a short program that prints each number from 1 to 100 on a new line.
// For each multiple of 3, print Fizz instead of the number
// For each multiple of 5, print Buzz instead of the number
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number
// OPTIONAL:
// * Write a function that keeps a tally of how often the phrases "fizz" and "buzz", and "fizzbuzz" occur in the array returned from the previous function.
// ** It should return an object like this:
// {
//     fizzbuzz: 6,
//     fizz: 27,
//     buzz: 14
// }

// Initialize an array for the values
const fizzArray = [];
// Print 1-100 using a for loop.
for (let i = 1; i <= 100; i++) {
  // Check if multiple of 3 or 5 and print proper statement
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    fizzArray.push("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
    fizzArray.push("Fizz");
  } else if (i % 5 === 0) {
    fizzArray.push("Buzz");
    console.log("Buzz");
  } else {
    console.log(i);
    fizzArray.push(i);
  }
}

// Create a function that sorts the values into an obj from array;
function tally(array) {
  // Define values
  let fizzbuzz = 0;
  let fizz = 0;
  let buzz = 0;
  let nums = 0;

  // Iterate over the array and add conditional statements to define values
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "FizzBuzz") {
      fizzbuzz++;
    } else if (array[i] === "Fizz") {
      fizz++;
    } else if (array[i] === "Buzz") {
      buzz++;
    } else {
      nums++;
    }
  }

  return {
    fizzbuzz,
    fizz,
    buzz,
    nums,
  };
}

// Store the total tally of the fizzArray in a var
let totalTally = tally(fizzArray);
// Log the total tally
console.log(totalTally);
