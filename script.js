let startButton = document.getElementById('isl-start-btn');
let firstSlide = document.getElementById('slide-1');
let puzzleScreen = document.getElementById('isl-puzzle-screen');

startButton.addEventListener('click', function() {
    // 1. Hide the intro text
    firstSlide.style.display = 'none';
    
    // 2. Show the puzzle container (the text box)
    puzzleScreen.style.display = 'block';
    
    // 3. Add the 'puzzle' class to the body to trigger the CSS background
    document.body.classList.add('puzzle');
    
    console.log("Success! Background switched and box is ready.");

});
// 1. Identify the new button and the input box
let submittextb = document.getElementById('nastja-submit-btn');
let userInput = document.getElementById('nastja-user-input');

// 2. Create the "Checking" logic
submittextb.addEventListener('click', function() {
    
    // Check if the text matches 'Mr Strobel'
    if (userInput.value === 'Mr Strobel') {
        // Success! Turn it green
        userInput.style.border = "4px solid green";
        console.log("Correct answer!");
        // You can add a 'alert("You escaped!")' here later!
    } else {
        // Wrong! Turn it red
        userInput.style.border = "4px solid red";
        console.log("Try again!");
    }
});