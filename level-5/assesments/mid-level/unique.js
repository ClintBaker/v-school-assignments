function extractUniqueCharacters(strings) {
  // define an array to store unique characters
  let uniqueChars = [];
  //   loop over each string in the array
  strings.forEach((string) => {
    // loop over each character in the string
    for (let i = 0; i < string.length; i++) {
      // if the character isn't already stored, add it to our main array
      if (!uniqueChars.includes(string[i])) {
        uniqueChars.push(string[i]);
      }
    }
  });
  //   return the uniqueChars
  return uniqueChars;
}

const words = ["apple", "banana", "cherry"];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']
