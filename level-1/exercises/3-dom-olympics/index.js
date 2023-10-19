// *-----BRONZE-----*
// Grab the header
const header = document.getElementById("header");

// Create the H1
const myHeading = document.createElement("h1");
myHeading.className = "header";
myHeading.textContent = "JavaScript Made This!!";

// Create the h3
const mySubHeading = document.createElement("h3");
mySubHeading.style.textAlign = "center";
mySubHeading.innerHTML =
  "<span class='name'>Clint Baker</span> wrote the JavaScript";

// Append the new elements
header.append(myHeading, mySubHeading);

// *-----SILVER-----*
// Grab an array of all the messages
const messages = document.getElementsByClassName("message");

// Create an array of interesting conversation
const interestingConversation = [
  "HELLO FRIEND",
  "Why are you writing in all caps?",
  "I AM NOT A ROBOT",
  "Hmmm... that seems like something a robot would say.",
];

// Iterate over the messages and input interesting messages in their stead
for (var i = 0; i < messages.length; i++) {
  messages[i].textContent = interestingConversation[i];
}

// Grab the clear button
const clearButton = document.getElementById("clear-button");

// Grab the messages div
const messagesDiv = document.getElementsByClassName("messages");

// Add event listener for click on clearButton
clearButton.addEventListener("click", () => {
  // Set the parent messages div back to ""
  messagesDiv[0].innerHTML = "";
});

// *-----GOLD-----*
// Grab the select element
const select = document.getElementById("theme-drop-down");

// Add an event listener that fires when the select element's value changes
select.addEventListener("change", () => {
  // Get the value of the select element to define the theme
  const theme = select.value;

  //   Get left and right messages arrays
  const leftMessages = document.getElementsByClassName("message left");
  const rightMessages = document.getElementsByClassName("message right");

  //   If the theme is theme-one apply those colors otherwise do the other theme color
  if (theme === "theme-one") {
    // Iterate over the messages arrays and change colors

    for (var i = 0; i < leftMessages.length; i++) {
      leftMessages[i].style.backgroundColor = "burlywood";
    }

    for (var i = 0; i < rightMessages.length; i++) {
      rightMessages[i].style.backgroundColor = "lightblue";
    }
  } else {
    for (var i = 0; i < leftMessages.length; i++) {
      leftMessages[i].style.backgroundColor = "black";
      leftMessages[i].style.color = "white";
    }

    for (var i = 0; i < rightMessages.length; i++) {
      rightMessages[i].style.backgroundColor = "red";
    }
  }
});
