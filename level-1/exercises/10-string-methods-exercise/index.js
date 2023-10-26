// All caps followed by all low
function capitalizeAndLowercase(string) {
  return string.toUpperCase() + string.toLowerCase();
}

console.log(capitalizeAndLowercase("banana"));

// Number that is half the string's length rounded down
function findMiddleIndex(string) {
  return Math.floor(string.length / 2);
}

console.log(findMiddleIndex("Hello World"));

// Return first half of the given string
function returnFirstHalf(string) {
  let half = findMiddleIndex(string);
  return string.slice(0, half);
}

console.log(returnFirstHalf("Hello World"));

// First half capitalized, second half lowercase
function capitalizeAndLowerCaseRemix(string) {
  let half = findMiddleIndex(string);
  let firstHalf = string.slice(0, half).toUpperCase();
  let secondHalf = string.slice(half).toLowerCase();
  return firstHalf + secondHalf;
}

console.log(capitalizeAndLowerCaseRemix("Hello World"));

// BONUS capitalizes any character that follows a space
function capitalize(string) {
  const splitString = string.split(" ");
  let newString = [];
  splitString.forEach((str) => {
    let letters = str.split("");
    letters[0] = letters[0].toUpperCase();
    newString.push(letters.join(""));
  });
  return newString.join(" ");
}

console.log(capitalize("Hello world what is good with ya'll"));
