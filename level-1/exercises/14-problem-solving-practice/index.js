// ******1*******
// Write a function that takes an array of numbers and returns the largest
function largest(nums) {
  let largest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  return largest;
}
// test data
console.log(largest([6, 13, 250, 3])); // => 250
console.log(largest([3, 5, 2, 8, 1])); // => 8
console.log(largest([-13, 40, 3, 0, 19, 22])); // => 40

// ******2*******
// Write a function that takes an array of words and a character and returns each word that has that character present
function lettersWithStrings(strings, letter) {
  const containsArray = [];
  for (let i = 0; i < strings.length; i++) {
    const index = strings[i].indexOf(letter);
    if (index > -1) {
      containsArray.push(strings[i]);
    }
  }

  return containsArray;
}
// test data
console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!")); // => ["$hello!", "test!"]
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")); // => ["C%4!", "Hey!"]
console.log(
  lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h")
); // => []

// ******3*******
// Write a function that takes a num1 and num2 and returns whether num1 is divisble by num2
function isDivisible(num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  } else {
    return false;
  }
}
// test data
console.log(isDivisible(4, 2)); // => true
console.log(isDivisible(9, 3)); // => true
console.log(isDivisible(15, 4)); // => false
