let startButton = document.getElementById('isl-start-btn');
let firstSlide = document.getElementById('slide-1');
let puzzleScreen = document.getElementById('isl-puzzle-screen');
let submitBtn = document.getElementById('nastja-submit-btn');
let successmsg = document.getElementById('nastja-success-message');
let finalScreen = document.getElementById('nastja-puzzle-container');

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

submitBtn.addEventListener('click', function() {
  // 1. Create a variable for the box itself (the element)
  const inputField = document.getElementById('nastja-answer-input');
  console.log("Success! User has entered an answer and clicked submit.");
  // 2. Create a variable for the text inside, converted to lowercase
  const theAnswer = inputField.value.toLowerCase().trim();

  if (theAnswer === "mr strobel") {
    // 3. Change the border of the inputField (the box), not the answer text
    inputField.style.border = "4px solid green";
  } else {
    inputField.style.border = "4px solid red";
  }
});
submitBtn.addEventListener('click', function() {
  const inputField = document.getElementById('nastja-answer-input');
  const theAnswer = inputField.value.toLowerCase().trim();
  
  // Create a variable to find our hidden message
  const successMsg = document.getElementById('nastja-success-message');

  if (theAnswer === "mr strobel") {
    inputField.style.border = "4px solid green";
    
    // THIS IS THE NEW LINE: It switches the message to visible
    successMsg.style.display = "inline"; 
    
    console.log("Access Granted!");
  } else {
    inputField.style.border = "4px solid red";
    
    // Optional: This hides it again if they change to a wrong answer
    successMsg.style.display = "none";
  }
});
// This waits 3000 milliseconds (3 seconds) before running the code inside
setTimeout(function() {
    // 1. Hide the current game element
    document.getElementById('your-game-container-id').style.display = 'none';
    
    // 2. Show the success screen
    document.getElementById('nastja-puzzle-container').style.display = 'block';
}, 3000);