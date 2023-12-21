// Receive an array of words and a target anagram
// Return the words that are anagrams of the given value

function filterAnagrams(arr, target) {
  // Define our anagrams array to return;
  let anagrams = [];
  // Loop over our array
  arr.forEach((word) => {
    // If the word is the same length as target
    if (word.length === target.length) {
      // To Lower Case Split Sort and Join to get the words in same order
      const string1 = word.toLowerCase().split("").sort().join("");
      const string2 = target.toLowerCase().split("").sort().join("");

      //   Compare, if they're the same add word to the array;
      if (string1 === string2) {
        anagrams.push(word);
      }
    }
  });

  return anagrams;
}

const words = ["listen", "silent", "dog", "god", "hello", "world"];
const target = "enlist";

const anagrams = filterAnagrams(words, target);
console.log(anagrams); // Output: ['listen', 'silent']
