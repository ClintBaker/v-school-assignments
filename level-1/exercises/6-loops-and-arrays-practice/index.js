// Number 1
var officeItems = [
  "stapler",
  "monitor",
  "computer",
  "desk",
  "lamp",
  "computer",
  "lamp",
  "stapler",
  "computer",
  "computer",
];

let numComputers = 0;
for (let i = 0; i < officeItems.length; i++) {
  if (officeItems[i] === "computer") numComputers++;
}
console.log(numComputers);

// Number 2
var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male",
  },
  {
    name: "Madeline",
    age: 80,
    gender: "female",
  },
  {
    name: "Cheryl",
    age: 22,
    gender: "female",
  },
  {
    name: "Sam",
    age: 30,
    gender: "male",
  },
  {
    name: "Suzy",
    age: 4,
    gender: "female",
  },
];
for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
    console.log(
      `${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough ${
        peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"
          ? "let him in"
          : "let her in"
      }`
    );
  } else {
    console.log(
      `${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough ${
        peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"
          ? "don't let him in"
          : "don't let her in"
      }`
    );
  }
}

// Bonus light switch
// Define function
function toggleLight(light) {
  return !light;
}
// Define light
let light = false;
// Define array
const arr = [2, 3, 2];
let counter = 1;
for (let i = 0; i < arr.length; i++) {
  for (let ib = 0; ib < arr[i]; ib++) {
    console.log("Toggle " + counter);
    counter++;
    light = toggleLight(light);
  }
}

if (light) {
  console.log("Light is on!");
} else {
  console.log("Light is off");
}
