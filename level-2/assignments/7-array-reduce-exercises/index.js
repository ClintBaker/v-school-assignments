const axios = require("axios");

// 1.
function total(arr) {
  const result = arr.reduce((final, num) => {
    final += num;
    return final;
  }, 0);

  return result;
}

console.log(total([1, 2, 3])); // 6

// 2.
function stringConcat(arr) {
  const result = arr.reduce((final, num) => {
    final = final + num;
    return final;
  }, "");
  return result;
}

console.log(stringConcat([1, 2, 3])); // "123"

// 3.
function totalVotes(arr) {
  return arr.reduce((final, voter) => {
    if (voter.voted) {
      final++;
    }
    return final;
  }, 0);
}

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
console.log(totalVotes(voters)); // 7

// 4.
function shoppingSpree(arr) {
  return arr.reduce((final, item) => {
    final += item.price;
    return final;
  }, 0);
}

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log("$" + shoppingSpree(wishlist).toLocaleString()); // 227005

// 5.
function flatten(arr) {
  return arr.reduce((final, array) => {
    final.push(...array);
    return final;
  }, []);
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// 6.
var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function voterResults(arr) {
  return arr.reduce(
    (final, voter) => {
      switch (true) {
        case voter.age <= 25 && voter.age > 17:
          final.numYoungPeople++;
          if (voter.voted) {
            final.numYoungVotes++;
          }
          break;
        case voter.age <= 35 && voter.age > 25:
          final.numMidPeople++;
          if (voter.voted) final.numMidVotes++;
          break;
        case voter.age <= 55 && voter.age > 35:
          final.numOldPeople++;
          if (voter.voted) final.numOldVotes++;
          break;
        default:
          break;
      }
      return final;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotes: 0,
      numMidPeople: 0,
      numOldVotes: 0,
      numOldPeople: 0,
    }
  );
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/

// EXTRA CREDIT
axios.get("https://api.github.com/users/ClintBaker/repos").then((res) => {
  //   res.data
  const watchers = res.data.reduce((final, repo) => {
    if (repo.watchers > 0) {
      final += repo.watchers;
    }
    return final;
  }, 0);

  console.log(watchers);
});
