// 1. Grab all our elements
let startButton = document.getElementById('isl-start-btn');
let firstSlide = document.getElementById('slide-1');
let puzzleContainer = document.getElementById('nastja-puzzle-container');
let submitBtn = document.getElementById('nastja-submit-btn');
let successMsg = document.getElementById('nastja-success-message');
let nextExitBtn = document.getElementById('next-exit-btn');
// 2. Start Button Logic
startButton.addEventListener('click', function () {
  firstSlide.style.display = 'none';
  puzzleContainer.style.display = 'block';
  document.body.classList.add('puzzle');
});

// 3. Check Answer Logic (The ONLY submit listener)
submitBtn.addEventListener('click', function () {
  const inputField = document.getElementById('nastja-answer-input');
  const theAnswer = inputField.value.toLowerCase().trim();

  if (theAnswer === "mr strobel") {
    // CORRECT: Feedback happens immediately
    inputField.style.border = "4px solid green";
    successMsg.style.display = "inline";

    // TIMER: This starts only AFTER the click
    setTimeout(function () {
      // Hide the puzzle and show the final image
      puzzleContainer.style.display = 'none';
      document.getElementById('locker-success-container').style.display = 'block';
    }, 2000);
       document.getElementById('next-exit-btn').addEventListener('click', function () {
      window.location.href = 'https://isladministrator.github.io/escape-room-puzzle-juju-and-mari/';
    });
    setTimeout(function () {
      document.getElementById('next-exit-btn').style.display = 'block';
    }, 2000); // This waits 2 seconds AFTER the success screen appears!
  } else {
    // WRONG: Red border
    inputField.style.border = "4px solid red";
    successMsg.style.display = "none";
  }
});
