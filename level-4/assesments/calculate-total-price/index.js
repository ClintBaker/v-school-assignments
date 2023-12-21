// Write a function called calculateTotalPrice that calculates the
// total price for each product in an array of objects representing products, where each object has a name (string), price (number), and quantity (number) property. The function should return a new array containing objects with the name and totalPrice properties, where totalPrice is the result of multiplying the price with the quantity for each product.

function calculateTotalPrice(products) {
  const newProducts = products.map((product) => {
    return {
      name: product.name,
      totalPrice: product.quantity * product.price,
    };
  });

  return newProducts;
}

const products = [
  { name: "Apple", price: 1.5, quantity: 3 },
  { name: "Banana", price: 0.75, quantity: 5 },
  { name: "Orange", price: 1.25, quantity: 2 },
];

const totalPriceArray = calculateTotalPrice(products);
console.log(totalPriceArray);

// Output: [
//  { name: 'Apple', totalPrice: 4.5 },
//  { name: 'Banana', totalPrice: 3.75 },
//  { name: 'Orange', totalPrice: 2.5 }
// ]
