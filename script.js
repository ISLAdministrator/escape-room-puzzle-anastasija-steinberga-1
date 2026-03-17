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
    // 1. Show immediate success feedback
    inputField.style.border = "4px solid green";
    successMsg.style.display = "inline";

    // 2. Wait 2 seconds, then swap to the final screen
    setTimeout(function () {
      puzzleContainer.style.display = 'none';
      document.getElementById('locker-success-container').style.display = 'block';

      // 3. Wait ANOTHER 2 seconds (while on the final screen) before showing the button
      setTimeout(function () {
        document.getElementById('next-exit-btn').style.display = 'block';
      }, 2000);

    }, 2000);

    // 4. Make sure the button actually goes to the link when clicked
    document.getElementById('next-exit-btn').onclick = function() {
      window.location.href = 'https://isladministrator.github.io/escape-room-puzzle-juju-and-mari/';
    };
  } else {
    // Wrong answer feedback
    inputField.style.border = "4px solid red";
    successMsg.style.display = "none";
  }
});