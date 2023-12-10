// 1. Prompt for phrase - what phrase would you like to encrypt? V School is awesome!
// 2. Prompt for letters - how many letters would you like to shift? 11
// 3. Log output - g dnszzw td 1hpdzxp!

// import readline-sync
import readline from "readline-sync";

// Letters array
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// parseInt function
function parseInt(int) {
  return Number(int) ? Number(int) : undefined;
}

// cipher function
function cipher(input, shift) {
  // if input is not a string return (validation)
  if (typeof input !== "string") return "input must be a string";
  // make sure input is lowercase
  input = input.toLowerCase();
  // make sure shift is a number
  shift = Number(shift) ? Number(shift) : undefined;
  // if shift is not a number return (validation)
  if (!shift) return "shift must be a number";

  //   create empty string for return value
  let encryptedString = "";
  //   loop over input
  for (let i = 0; i < input.length; i++) {
    // define char variable
    const char = input[i];
    // if the char is included in the letters array
    if (letters.includes(char)) {
      // get index of char
      const index = letters.indexOf(char);
      //   account for looping through array if index + shift exceeds length
      if (letters[index + shift]) {
        // return the char from the letters array at the index of index incremented by shift
        encryptedString = encryptedString + letters[index + shift];
      } else {
        // add the char from the letters array at the index of the remainder of shift / length
        // Example: letter z is at 25 index.  let's say shift is 2.  index + shift = 27.  27 % length is
        //      1.  1 would be "b" which is two letters away from z.
        encryptedString =
          encryptedString + letters[(index + shift) % letters.length];
      }
    } else {
      // add the value
      encryptedString = encryptedString + char;
    }
  }

  return encryptedString;
}

// Get input
const input = readline
  .question("What phrase would you like to encrypt? ")
  .toLowerCase();
// Get shift
const shift = parseInt(
  readline.question("How many letters would you like to shift?")
);

// Call cipher function to get return value and print
console.log(cipher(input, shift));
