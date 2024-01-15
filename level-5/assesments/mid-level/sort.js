function sortByProperty(objects, propertyName) {
  // Check if we're comparing a value that's a num or string
  if (isNaN(objects[0][propertyName])) {
    // If string we use localeCompare
    return objects.sort((a, b) =>
      a[propertyName].localeCompare(b[propertyName])
    );
  } else {
    // If num we use a simple - in sort callback
    return objects.sort((a, b) => a[propertyName] - b[propertyName]);
  }
}

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 28 },
];

const sortedByAge = sortByProperty(people, "age");
console.log(sortedByAge);
