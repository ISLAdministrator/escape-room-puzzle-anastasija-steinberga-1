let startButton = document.getElementById('isl-start-btn');
let firstSlide = document.getElementById('slide-1');
let puzzleContainer = document.getElementById('nastja-puzzle-container');
let submitBtn = document.getElementById('nastja-submit-btn');
let successMsg = document.getElementById('nastja-success-message');

startButton.addEventListener('click', function () {
  firstSlide.style.display = 'none';
  puzzleContainer.style.display = 'block';
  document.body.classList.add('puzzle');
});

submitBtn.addEventListener('click', function () {
  const inputField = document.getElementById('nastja-answer-input');
  const theAnswer = inputField.value.toLowerCase().trim();

  if (theAnswer.toLowerCase() === "mr strobel" || "mr. strobel" || "mrstrobel" || "mr.strobel") {
    inputField.style.border = "4px solid green";
    successMsg.style.display = "inline";

    // Wait 2 seconds, show success image
    setTimeout(function () {
      puzzleContainer.style.display = 'none';
      document.getElementById('locker-success-container').style.display = 'block';

      // Wait ANOTHER 2 seconds, show button
      setTimeout(function () {
        document.getElementById('next-exit-btn').style.display = 'block';
      }, 2000);

    }, 2000);

    // Make button work
    document.getElementById('next-exit-btn').onclick = function() {
      window.location.href = 'https://isladministrator.github.io/escape-room-puzzle-juju-and-mari/';
    };
  } else {
    inputField.style.border = "4px solid red";
  }
});
