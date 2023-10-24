console.log("FORCEPTION");
// Starter variables
const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(names, alphabet) {
  let output = [];
  for (let i = 0; i < names.length; i++) {
    output.push(`${names[i]}:`);
    for (let x = 0; x < alphabet.length; x++) {
      output.push(alphabet[x]);
    }
  }
  return output;
}

function forceptionBetter(names, alphabet) {
  let output = [];
  for (let i = 0; i < names.length; i++) {
    output.push(`${names[i]}:`, ...alphabet);
  }
  return output;
}

let res = forception(people, alphabet);
console.log(res);
