const colors = ["red", "blue", "green"];

document.getElementById("add").addEventListener("click", function (e) {
  const subItem = createSubItem(e);
  document.getElementById("list").appendChild(subItem);
});

function createDropDown(subItem) {
  const dropDown = document.createElement("select");
  for (let i = 0; i < colors.length; i++) {
    const option = document.createElement("option");
    option.innerHTML = colors[i];
    option.value = colors[i];
    dropDown.append(option);
  }
  dropDown.addEventListener("change", function (e) {
    const color = dropDown.value;
    subItem.style.backgroundColor = color;
  });
  return dropDown;
}

function createSubItem() {
  const subItem = document.createElement("div");
  var subItemValue = document.getElementById("input").value;
  subItem.textContent = subItemValue;
  subItem.style.backgroundColor = "red";
  const dropDown = createDropDown(subItem);
  subItem.appendChild(dropDown);
  subItem.className = "subItem";
  return subItem;
}
