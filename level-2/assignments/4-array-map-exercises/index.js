// 1.
// A function that takes an array of numbers and returns an array of doubled numbers
function doubleNumbers(nums) {
  const doubled = nums.map((num) => {
    return num * 2;
  });

  return doubled;
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// 2.
// A function that takes an array of numbers and
// returns an array of strings
function stringItUp(arr) {
  const strings = arr.map((num) => {
    return `${num}`;
  });
  return strings;
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3.
// A function that takes in an array of strings and returns
// them where the first letter is capitalized
function capitalizeNames(arr) {
  const caps = arr.map((name) => {
    let str = "";
    for (let i = 0; i < name.length; i++) {
      if (i === 0) {
        str += name[i].toUpperCase();
      } else {
        str += name[i].toLowerCase();
      }
    }

    return str;
  });

  return caps;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// Output:
// ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 4.
// A function that takes an array of objects, and returns an array
// of only the name properties of the objects
function namesOnly(arr) {
  const names = arr.map((obj) => {
    return obj.name;
  });

  return names;
}

console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 5.
// A function that takes in an array of objects and returns an array
// of strings that are conditional based on age.
function makeStrings(arr) {
  const strings = arr.map((person) => {
    if (person.age >= 18) {
      return `${person.name} can go to The Matrix`;
    } else {
      return `${person.name} is under age!!`;
    }
  });
  return strings;
}

console.log(
  makeStrings([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

// 6.
// A function that takes an array of objects and returns an array
// of strings that ready for the DOM.
function readyToPutInTheDOM(arr) {
  const domArr = arr.map((person) => {
    return `<h1>${person.name}</h1><h2>${person.age}</h2`;
  });

  return domArr;
}
console.log(
  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
