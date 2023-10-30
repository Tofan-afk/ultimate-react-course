//PreDefine for some reason the body background-color
document.body.style.backgroundColor = "white";
// Define the desired key sequence
const desiredSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

// Initialize variables to keep track of the current input sequence
let currentSequence = [];
let index = 0;

// Function to check if the entered sequence matches the desired sequence
function checkSequence() {
  if (JSON.stringify(currentSequence) === JSON.stringify(desiredSequence)) {
    console.log("Dark_mode");
    toggleColors();
    currentSequence = [];
    index = 0;
  }
}

// Event listener to capture keydown events
document.addEventListener("keydown", (event) => {
  // Get the key code of the pressed key
  const keyCode = event.code;

  // Check if the current key matches the next key in the desired sequence
  if (keyCode === desiredSequence[index]) {
    currentSequence.push(keyCode);
    index++;

    // Check if the entire desired sequence has been entered
    if (index === desiredSequence.length) {
      checkSequence();
    }
  } else {
    // Reset the current sequence if a key does not match
    currentSequence = [];
    index = 0;
  }
});

function toggleColors() {
  // Get all elements within the <body> tag
  const elements = document.body.querySelectorAll("*");

  // Loop through each element and toggle colors
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "rgb(14, 14, 22)";
    elements.forEach((element) => {
      element.style.color = "white";
      document.querySelectorAll("path").forEach(function(path) {
        path.style.fill = "white";
      });
    });
  } else {
    document.body.style.backgroundColor = "white";
    elements.forEach((element) => {
      element.style.color = "black";
      document.querySelectorAll("path").forEach(function(path) {
        path.style.fill = "black";
      });
    });
  }
}
