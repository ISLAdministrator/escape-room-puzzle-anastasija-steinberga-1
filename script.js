let startButton = document.getElementById('isl-start-btn');
let firstSlide = document.getElementById('slide-1');
let puzzleScreen = document.getElementById('isl-puzzle-screen');

startButton.addEventListener('click', function() {
    // 1. Hide the intro text
    firstSlide.style.display = 'none';
    let puzzleScreen = document.getElementById('nastja-puzzle-container');
    puzzleScreen.style.display = 'block';
    // 2. Show the puzzle container (the text box)
    // 3. Add the 'puzzle' class to the body to trigger the CSS background
    document.body.classList.add('puzzle');
    
    console.log("Success! Background switched and box is ready.");

});

const submitBtn = document.getElementById('nastja-submit-btn');
const userInput = document.getElementById('nastja-answer-input');

submitBtn.addEventListener('click', function() {
  // This checks if the text matches exactly
  if (userInput.value === "Mr Strobel") {
    userInput.style.border = "4px solid green";
    console.log("Access Granted!");
  } else {
    userInput.style.border = "4px solid red";
    console.log("Access Denied!");
  }
});