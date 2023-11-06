/* 
ASSIGNMENT:
1. Track how many times the user clicks
2. Display click count to user
3. Use localStorage to make it so the number of clicks will remain on the screen even after site is refreshed
4. Countdown timer 10-30 seconds on the page that stops teh user's clicks from counting towards the total after the timer ends.

*/
// Get clicks Element (H3)
const clicksElement = document.getElementById("clicks");
// On load get clicks value
const score = Number(localStorage.getItem("clicks"));
if (score) {
  // Set clicks value
  clicksElement.textContent = `SCORE: ${score}`;
} else {
  clicksElement.textContent = `SCORE: 0`;
}

// Set universal seconds variable;
let seconds = 0;

// Track how many times the user clicks by adding a click event listener to the window
window.addEventListener("click", function () {
  if (seconds < 10) {
    // Grab score
    const clickScore = Number(localStorage.getItem("clicks"));

    //   If there is a score, store, and add to DOM
    if (clickScore) {
      // Increment
      let newScore = clickScore + 1;
      // Store
      this.localStorage.setItem("clicks", newScore);
      // Display
      clicksElement.textContent = `SCORE: ${newScore}`;
    } /* Otherwise add score to localStorage, then add to DOM */ else {
      // Store
      localStorage.setItem("clicks", 1);
      // Display
      clicksElement.textContent = `SCORE: 1`;
    }
  } else {
    console.log("This click doesn't count");
  }
});

// Handle Timer
// Grab element
const timerElement = document.getElementById("timer");

// Handle the timer interval
const intervalId = setInterval(function () {
  // Increment seconds on the timer
  seconds++;
  //   This is for styling
  if (seconds < 10) {
    timerElement.textContent = `TIMER: 0${seconds}`;
  } else {
    timerElement.textContent = `TIMES UP!`;
    clearInterval(intervalId);
  }
}, 1000);
