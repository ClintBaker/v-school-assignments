// 1.
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

// 2.
for (let j = 9; j >= 0; j--) {
  console.log(j);
}

// 3.
const fruit = ["banana", "orange", "apple", "kiwi"];
for (let f = 0; f < fruit.length; f++) {
  console.log(fruit[f]);
}

// BRONZE
// 1. Write a for loop that will push the numbers 0 through 9 to an array.
let arr = [];
for (let a = 0; a <= 9; a++) {
  arr.push(a);
}
console.log(arr);
// 2. Write a for loop that prints to the console only even numbers 0 through 100.
for (let n = 0; n <= 100; n++) {
  if (n % 2 === 0) {
    console.log(n);
  }
}
// 3. Write a for loop that will push every other fruit to an array.
const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
const everyOtherFruit = [];
for (let b = 0; b < fruits.length; b++) {
  if (b % 2 === 0) {
    everyOtherFruit.push(fruits[b]);
  }
}

console.log(everyOtherFruit);

// SILVER MEDAL
const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor",
  },
  {
    name: "Justin Bieber",
    occupation: "Singer",
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician",
  },
  {
    name: "Oprah",
    occupation: "Entertainer",
  },
];

// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations

// 1. Write a loop that will print out all the names of the people of the people array
for (let p = 0; p < peopleArray.length; p++) {
  console.log(peopleArray[p].name);
}
// 2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.
let names = [];
let occupations = [];
for (let pn = 0; pn < peopleArray.length; pn++) {
  occupations.push(peopleArray[pn].occupation);
  names.push(peopleArray[pn].name);
}

console.log(names);
console.log(occupations);
// 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".
let everyOtherName = [];
let everyOtherOccupation = [];
for (let eo = 0; eo < peopleArray.length; eo++) {
  if (eo % 2 === 0) {
    everyOtherName.push(peopleArray[eo].name);
  } else {
    everyOtherOccupation.push(peopleArray[eo].occupation);
  }
}

console.log(everyOtherName);
console.log(everyOtherOccupation);

// Think about what good names for the arrays would be. Since it will be an array of each name or occupation, the plurals of name and occupation would be appropriate.

// GOLD MEDAL
// 1.
let grid = [];
for (let x = 0; x < 3; x++) {
  grid.push([0, 0, 0]);
}
console.log(grid);

// 2.
let gridTwo = [];
for (let xa = 0; xa < 3; xa++) {
  gridTwo.push([xa, xa, xa]);
}
console.log(gridTwo);

// 3.
let gridThree = [];
for (let xb = 0; xb < 3; xb++) {
  gridThree.push([0, 1, 2]);
}
console.log(gridThree);

// 1.
let gridNumbers = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
for (let i = 0; i < gridNumbers.length; i++) {
  for (let x = 0; x < gridNumbers[i].length; x++) {
    gridNumbers[i][x] = "x";
  }
}
console.log(gridNumbers);
