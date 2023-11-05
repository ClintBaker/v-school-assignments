/* 
1. CHECK A list of each baddie
    - Baddie image
    - Baddie name
    - Price of baddie
    - Input box to enter the total caught of that type
2. Total price (dynamicly generated)
3. CHECK A footer
    - Mario email
    - Mario company website URL
    - Mario physical address
4. CHECK Large title "Mario Pest Control"
5. CHECK Is responsive

*/

/*
1. Grab each input
2. Listen for change
3. OnChange we will update the total cost
*/

// Grab each input
const goombaInput = document.getElementById("qty-goomba");
const bobInput = document.getElementById("qty-bob-omb");
const cheepCheepInput = document.getElementById("qty-cheep-cheep");

// Define total
let total = 0;
// Define the cost span
const cost = document.getElementById("cost");

// Listen for input
goombaInput.addEventListener("input", function (e) {
  // Tally total and change the HTML
  total =
    goombaInput.value * 5 + bobInput.value * 7 + cheepCheepInput.value * 11;
  cost.textContent = `${total} coins`;
});

bobInput.addEventListener("input", function (e) {
  // Tally total and change the HTML
  total =
    goombaInput.value * 5 + bobInput.value * 7 + cheepCheepInput.value * 11;
  cost.textContent = `${total} coins`;
});

cheepCheepInput.addEventListener("input", function (e) {
  // Tally total and change the HTML
  total =
    goombaInput.value * 5 + bobInput.value * 7 + cheepCheepInput.value * 11;
  cost.textContent = `${total} coins`;
});
