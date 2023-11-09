// 1. Rest Operator
const collectAnimals = (...animals) => animals;

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// 2. Write a function that returns a food object with the array names as properties.
// You'll use an ES6 shorthand syntax that becomes useful when a
// variable name is mentioned twice in both the name and value of
// properties in your object:
const combineFruit = (fruit, sweets, vegetables) => {
  return { fruit, sweets, vegetables };
};

console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]));
/*=> {
        fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
     }
*/

// 3.
// Use destructuring to use the property names as variables.
// Destructure the object in the parameter:
function parseSentence({ location, duration }) {
  return `We're going to have a good time in ${location} for ${duration}`;
}

console.log(
  parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks",
  })
);

// 4.
// Use array destructuring to make this code ES6:
const returnFirst = ([item1, ...items]) => item1;
console.log(returnFirst(["hello", "item2"]));

// 5.
// Write destructuring code to assign variables that will help us return the
// expected string. Also, change the string to be using Template literals:
const favoriteActivities = [
  "magnets",
  "snowboarding",
  "philanthropy",
  "janitor work",
  "eating",
];

function returnFavorites([firstFav, secondFav, thirdFav, ...otherFavs]) {
  /*your code here*/
  return (
    "My top three favorite activities are, " +
    firstFav +
    ", " +
    secondFav +
    ", and " +
    thirdFav
  );
}

console.log(returnFavorites(favoriteActivities));

// Blue 1.
// Use the Rest and Spread Operator to help take any number of arrays, and
// return one array. You will need to change how the arrays are passed in.
// You may write it assuming you will always recieve three arrays
// if you would like to.
const combineAnimals = (...animalsArrays) => {
  let combined = [];
  //   prettier-ignore
  animalsArrays.forEach(arr => combined.push(...arr));
  return combined;
};

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(
  combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals, ["gorilla"])
);

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Black Diamond 1.
const product = (...numbers) => {
  console.log(numbers);
  return numbers.reduce((acc, number) => acc * number, 1);
};

console.log(product(1, 2, 3, 3, 2));

// Black Diamond 2.
const unshift = (array, ...second) => [...second, ...array];
console.log(unshift([1, 2, 3, 4], 5, 6, 7, 8));

// Double Black Diamond 1.
// Write some destructuring code to help this function out. Use the ES6
// shorthand that helps make the syntax look less redundant to simplify it:
function populatePeople(names) {
  // prettier-ignore
  return names.map(name => {
    [firstName, lastName] = name.split(" ");
    console.log(firstName)
    // your code
    return {
        firstName,
        lastName
    }
  });
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
