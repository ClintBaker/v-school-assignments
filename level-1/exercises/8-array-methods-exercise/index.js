var fruits = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1.
vegetables.pop();
console.log("vegetables:", vegetables);
// 2.
fruits.shift();
console.log("fruits:", fruits);
// 3.
console.log(fruits.indexOf("orange"));
// 4.
fruits.push(fruits.indexOf("orange"));
console.log("fruits:", fruits);
// 5.
let vegLength = vegetables.length;
console.log(vegLength);
// 6.
vegetables.push(vegLength);
console.log("vegetables:", vegetables);
// 7.
let foods = fruits.concat(vegetables);
console.log("food:", foods);
// 8.
foods.splice(4, 2);
console.log("food:", foods);
// 9.
foods.reverse();
console.log("food:", foods);
// 10.
const str = foods.join();
console.log("food string:", str);
const returnFood = str.split(",");
console.log("food back to array:", returnFood);
