// Try to make the following function more ES6xy:
// We changed over to fat arrow functions and used the rest operator to use the numbers as an array
const product = (...numbers) => {
  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1);
};

// 2.  Instead of taking an array and hard wired numbers, we use the rest operators to use the numbers as an array.
// From there instead of using concat, we use the spread operator to return a new combined array;
const unshift = (array, ...array2) => {
  return [...array, ...array2];
};

const array = unshift([1, 2, 3, 4], 5, 6, 7, 8, 9, 10);
console.log(array);
