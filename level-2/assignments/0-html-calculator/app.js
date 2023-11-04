// CHECK 1. 3 sections - One section <div></div> for each math operation (3 sections total)
// CHECK 2. 2 inputs per section (first, second nums)
// CHECK 3. Each form will have a button to perform the operation
// CHECK 4. You will inject the result in the the HTML
// CHECK 5. 3 Colors in the theme
// CHECK 6. Proper padding / spacing for a nice layout

// Define functions
function add(num1, num2) {
  const result = Number(num1) + Number(num2);
  return result;
}

function subtract(num1, num2) {
  const result = Number(num1) - Number(num2);
  return result;
}

function multiply(num1, num2) {
  const result = Number(num1) * Number(num2);
  return result;
}

// *-----ADD-----*
// Get add form
const addForm = document.add;
// Add submit event listener for add form
addForm.addEventListener("submit", function (e) {
  // Prevent default
  e.preventDefault();
  //   Grab the result div
  const addResult = document.getElementById("add-result");
  //   Update the text
  addResult.textContent = "Result: ";

  //   Get num1 and 2;
  const num1 = addForm.num1.value;
  const num2 = addForm.num2.value;
  //   Reset values of num1 and 2;
  addForm.num1 = "";
  addForm.num2 = "";
  //   Perform add function
  const result = add(num1, num2);
  //   Update the text in the result div
  addResult.textContent += ` ${result}`;
});

// *-----SUBTRACT-----*
// Get add form
const subtractForm = document.subtract;
// Add submit event listener for subtract form
subtractForm.addEventListener("submit", function (e) {
  // Prevent default
  e.preventDefault();
  //   Grab the result div
  const subtractResult = document.getElementById("subtract-result");
  //   Update the text
  subtractResult.textContent = "Result: ";

  //   Get num1 and 2;
  const num1 = subtractForm.num1.value;
  const num2 = subtractForm.num2.value;
  //   Reset values of num1 and 2;
  subtractForm.num1 = "";
  subtractForm.num2 = "";
  //   Perform add function
  const result = subtract(num1, num2);
  //   Update the text in the result div
  subtractResult.textContent += ` ${result}`;
});

// *-----MULTIPLY-----*
// Get add form
const multiplyForm = document.multiply;
// Add submit event listener for muliply form
multiplyForm.addEventListener("submit", function (e) {
  // Prevent default
  e.preventDefault();
  //   Grab the result div
  const multiplyResult = document.getElementById("multiply-result");
  //   Update the text
  multiplyResult.textContent = "Result: ";

  //   Get num1 and 2;
  const num1 = multiplyForm.num1.value;
  const num2 = multiplyForm.num2.value;
  //   Reset values of num1 and 2;
  multiplyForm.num1 = "";
  multiplyForm.num2 = "";
  //   Perform add function
  const result = multiply(num1, num2);
  //   Update the text in the result div
  multiplyResult.textContent += ` ${result}`;
});
