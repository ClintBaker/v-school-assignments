var peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12,
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 29,
  },
  {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27,
  },
  {
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13,
  },
  {
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82,
  },
];

function sortedOfAge(people) {
  // 1. List everyone older than 18
  const ofAge = people.filter((person) => person.age >= 18);
  // 2. Sort alphabetically by lastName
  ofAge.sort((a, b) => a.lastName.localeCompare(b.lastName));
  // 3. Format into li strings
  return ofAge.map(
    (person) =>
      `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`
  );
}

console.log(sortedOfAge(peopleArray));
