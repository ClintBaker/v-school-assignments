// *****Challenge 1: Sort Array with Preserved Index for -1 Values*****
// Sort the array where -1 values maintain their index position, but positive values are sorted ascending
function solution(arr) {
  //   1) Define index positions of each -1 value
  const negatives = [];
  arr.forEach((num, i) => {
    if (num === -1) {
      negatives.push(i);
    }
  });

  //   2) Filter the array to get rid of -1s
  const filtered = arr.filter((num) => num !== -1);

  //   3) Sort the filtered array in ascending order
  const sorted = filtered.sort((a, b) => a - b);

  //   4) Insert the -1s using splice
  negatives.forEach((index) => {
    sorted.splice(index, 0, -1);
  });

  return sorted;
}

// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));
// console.log(solution([5, 3, 1]));
// console.log(solution([-1, -1, -1, -1]));
// console.log(solution([100, -1, 50, -1, 75]));

/* *****CHALLENGE 2***** */

// Count how many vowels are in a string
function countVowels(string) {
  // 1. Define vowels
  const vowels = ["a", "e", "i", "o", "u"];
  // 2. Define total variable;
  let total = 0;
  // 3. Iterate over the string
  for (let i = 0; i < string.length; i++) {
    // Validate if the current letter is vowel
    if (vowels.includes(string[i])) {
      //   If the vowels array includes the current letter, increment total
      total++;
    }
  }
  return total;
}

// // SOLUTION
// const input = "Hello, world!";
// console.log(countVowels(input)); // Output: 3
// const input2 = "Counting Vowels";
// console.log(countVowels(input2)); // Output: 5

// CHALLENGE 3
// Write a JavaScript function called **`findSumOfTwo`** that takes in an array of numbers and a target number. The function should find two numbers in the array that add up to the target number and return them as an array. If there are multiple pairs that satisfy the condition, return any one of them. If no such pair exists, return an empty array.

// Implement the **`findSumOfTwo`** function using either the provided example solutions or your own solution.
// Write a JavaScript function called **`findSumOfTwo`** that takes in an array of numbers and a target number. The function should find two numbers in the array that add up to the target number and return them as an array. If there are multiple pairs that satisfy the condition, return any one of them. If no such pair exists, return an empty array.

// Implement the **`findSumOfTwo`** function using either the provided example solutions or your own solution.

// function findSumOfTwo(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [numbers[i], numbers[j]];
//       }
//     }
//   }
// }

function findSumOfTwo(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers[i], numbers[j]];
      }
    }
  }

  return [];
}

console.log(findSumOfTwo([2, 4, 7, 11, 15], 9)); // Output: [2, 7]

console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5]
