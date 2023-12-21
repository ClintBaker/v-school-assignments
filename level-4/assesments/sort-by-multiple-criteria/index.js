function sortByMultipleCriteria(people) {
  // Sort by age
  const newPeople = people.sort((a, b) => {
    return a.age - b.age;
  });

  //   Sort by name
  newPeople.sort((a, b) => a.name - b.name);

  //   Return
  return newPeople;
}

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 },
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]
