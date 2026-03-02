// 1. Identify the parts of your room
let startButton = document.getElementById('isl-start-btn');
let firstSlide = document.getElementById('slide-1');
let puzzleScreen = document.getElementById('isl-puzzle-screen');

// 2. The "Waiting Room" (Event Listener)
startButton.addEventListener('click', function() {
    
    // 3. The Action: Swap the screens!
    firstSlide.style.display = 'none';
    puzzleScreen.style.display = 'block';
    
    // apply class that gives us a different background and makes it
    // fit the whole screen (see style.css for details)
    document.body.classList.add('puzzle');
    
    console.log("Success! The player moved to the puzzle.");
});
