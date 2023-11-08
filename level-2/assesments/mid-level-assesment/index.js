// *-----Challenge 1: Sorting an Array-----*
// Write a function that takes an array of numbers and returns a
// new array with the numbers sorted in ascending order.
function sortNumbers(numbers) {
  // Return the numbers array sorted with the condition a-b (lowest to highest)
  return numbers.sort((a, b) => a - b);
}
// Example usage:
// Define the array
const numbers = [4, 2, 7, 1, 9, 5];
// Sort the numbers
const sortedNumbers = sortNumbers(numbers);
// Log the result
console.log(sortedNumbers); // Output: [1, 2, 4, 5, 7, 9]

// *----- Challenge 2: Mapping an Array -----*
// Write a function that takes an array of strings and returns a
// new array where each string is converted to uppercase.
function convertToUppercase(strings) {
  // Return the new array returned from mapping over the strings array and performing the .toUpperCase() function on each string.
  return strings.map((string) => string.toUpperCase());
}
// Example usage:
// Define the array
const strings = ["hello", "world", "javascript"];
// Map over the array and return modified values;
const uppercaseStrings = convertToUppercase(strings);
// Log the result
console.log(uppercaseStrings); // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']

// CHALLENGE 3
//
// Write a function that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers) {
  // prettier-ignore
  return numbers.filter(number => number % 2 === 0);
}

const numbers2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers2);
console.log(evenNumbers); // Output: [2, 4, 6]
