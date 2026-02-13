console.log("Script loaded");

// below is basic example code for using a button
// you can use it, expand on it, or delete it
// that all depends on your team's plan.

const button = document.getElementById("button");
const slide1 = document.getElementById("slide-1");
const slide2 = document.getElementById("slide-2");
const buttonBack = document.getElementById("button-back");

// Get draggable elements
const arrow = document.getElementById("arrow");
const cipherPaper = document.getElementById("cipher-paper");

// Variables for dragging
let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let startX = 0;
let startY = 0;

// Function to show a specific slide
function showSlide(slideElement) {
  // Hide all slides
  document.querySelectorAll(".slide").forEach(slide => {
    slide.classList.add("hidden");
  });
  // Show the requested slide
  slideElement.classList.remove("hidden");
}

// Event listener for main button to go to nurse's log
button.addEventListener("click", function () {
  console.log("Moving to nurse's log");
  showSlide(slide2);
});

// Event listener for back button to return to intro
if (buttonBack) {
  buttonBack.addEventListener("click", function () {
    console.log("Returning to intro");
    showSlide(slide1);
  });
}

// Dragging functionality for arrow
if (arrow) {
  arrow.addEventListener("mousedown", function(e) {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    const rect = arrow.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    arrow.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", function(e) {
    if (!isDragging) return;
    
    const book = document.querySelector(".book");
    const bookRect = book.getBoundingClientRect();
    
    // Calculate new position relative to the book
    let newX = e.clientX - bookRect.left - offsetX;
    let newY = e.clientY - bookRect.top - offsetY;
    
    // Keep arrow within book bounds
    newX = Math.max(0, Math.min(newX, bookRect.width - 40));
    newY = Math.max(0, Math.min(newY, bookRect.height - 40));
    
    // Update arrow position
    arrow.style.left = newX + "px";
    arrow.style.top = newY + "px";
    arrow.style.transform = "none";
    
    // Update cipher paper position to follow the arrow
    cipherPaper.style.left = (newX + 50) + "px";
    cipherPaper.style.top = newY + "px";
    cipherPaper.style.transform = "none";
    cipherPaper.classList.add("visible");
  });

  document.addEventListener("mouseup", function() {
    isDragging = false;
    arrow.style.cursor = "grab";
  });
}
