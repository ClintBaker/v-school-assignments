function findVowels(string) {
  // loop over the string
  // check each character against an array of vowels
  // if it's a vowel add to tally
  // return the number vowels

  let tally = 0

  const vowels = ['a', 'e', 'i', 'o', 'u']

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) tally++
  }

  console.log(tally)
  return tally
}

findVowels('hello') // --> 2
findVowels('why') // --> 0
