// 1. Change the vars to let or const
const name = "John";
let age = 101;

function runForLoop(pets) {
  const petObjects = [];
  for (let i = 0; i < pets.length; i++) {
    const pet = { type: pets[i] };
    let name;
    if (pets[i] === "cat") {
      name = "fluffy";
    } else {
      name = "spot";
    }
    console.log("pet name: ", name);
    pet.name = name;
    petObjects.push(pet);
  }
  console.log("man name: ", name);
  return petObjects;
}

runForLoop(["cat", "dog"]);

// 2. Convert to fat arrow function
const carrots = ["bright orange", "ripe", "rotten"];

// Old
// function mapVegetables(arr) {
//   return arr.map(function (carrot) {
//     return { type: "carrot", name: carrot };
//   });
// }

const mapVegetables = (arr) => {
  return arr.map((carrot) => {
    return { type: "carrot", name: carrot };
  });
};

console.log(mapVegetables(carrots));

// 3.
// Change the callback function to a fat arrow function
const people = [
  {
    name: "Princess Peach",
    friendly: false,
  },
  {
    name: "Luigi",
    friendly: true,
  },
  {
    name: "Mario",
    friendly: true,
  },
  {
    name: "Bowser",
    friendly: false,
  },
];

function filterForFriendly(arr) {
  // prettier-ignore
  return arr.filter(person => person.friendly);
}

console.log(filterForFriendly(people));

// 4.
// Re-write as fat arrow functions
const doMathSum = (a, b) => a + b;
const produceProduct = (a, b) => a * b;

console.log(doMathSum(1, 2));
console.log(produceProduct(1, 2));

// 5.
// Write a printString function that takes firstName, lastName, and age as
// parameters and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?

const printString = (firstName, lastName, age) =>
  `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;

console.log(printString("Kat", "Stark", 40));

// EXTRA CREDIT
const animals = [
  {
    type: "dog",
    name: "theodore",
  },
  {
    type: "cat",
    name: "whiskers",
  },
  {
    type: "pig",
    name: "piglette",
  },
  {
    type: "dog",
    name: "sparky",
  },
];

function filterForDogs(arr) {
  return arr.filter(({ type }) => {
    if (type === "dog") {
      return true;
    } else {
      return false;
    }
  });
}

console.log(filterForDogs(animals));
