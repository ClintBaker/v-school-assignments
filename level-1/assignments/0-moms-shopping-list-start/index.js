// Grab the form
const form = document["addItem"];
// Grab the list parent
const list = document.getElementById("list");

// Add event listener to submit on form
form.addEventListener("submit", (e) => {
  // Prevent default
  e.preventDefault();
  //   Grab new item value from form
  const newItemValue = form.title.value;
  //   Create new list item
  const newItem = document.createElement("li");
  //   Create div to put inside li
  const newItemDiv = document.createElement("div");
  newItemDiv.textContent = newItemValue;
  //   Create edit button
  const newItemEditButton = document.createElement("button");
  newItemEditButton.textContent = "edit";
  //   Add event listener for the edit button
  newItemEditButton.addEventListener("click", () => {
    // Check if we're editing or saving
    if (newItemEditButton.textContent === "edit") {
      // Change the text to save & make form visible;
      newItemEditButton.textContent = "save";
      editInput.style.display = "inline";
    } else {
      // Change text to save, change div value, change visibility of editInput, reset input
      newItemEditButton.textContent = "edit";
      newItemDiv.textContent = editInput.value;
      editInput.style.display = "none";
      editInput.value = "";
    }
  });
  // //   Create edit input & default to hidden
  const editInput = document.createElement("input");
  editInput.placeholder = "Change the name here";
  editInput.className = "input";
  editInput.style.display = "none";

  //   Create delete button
  const newItemDeleteButton = document.createElement("button");
  newItemDeleteButton.textContent = "X";
  //   Add event listener for X button
  newItemDeleteButton.addEventListener("click", () => {
    newItem.remove();
  });
  //   Append html elements to li
  newItem.append(newItemDiv, newItemEditButton, editInput, newItemDeleteButton);
  //   Append li to ul
  list.append(newItem);
});
