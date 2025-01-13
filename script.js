// Select the hamburger icon, menu, and close icon
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeIcon = document.querySelector("#close-icon");

// Event listener to open the menu
hamburger.addEventListener("click", () => {
  menu.classList.add("active"); // Add the active class to show the menu
});

// Event listener to close the menu
closeIcon.addEventListener("click", () => {
  menu.classList.remove("active"); // Remove the active class to hide the menu
});

// Store the current index for each slideshow
const slideIndices = {};

// Initialize all slideshows
document.querySelectorAll(".slideshow-container").forEach((container) => {
  const index = container.getAttribute("data-index");
  slideIndices[index] = 1; // Initialize the current slide for this slideshow
  showSlides(1, index); // Show the first slide
});

// Next/Previous Controls
function plusSlides(n, slideshowIndex) {
  slideIndices[slideshowIndex] += n; // Update the index
  showSlides(slideIndices[slideshowIndex], slideshowIndex); // Show the updated slide
}

// Dot Controls
function currentSlide(n, slideshowIndex) {
  slideIndices[slideshowIndex] = n; // Set the slide index
  showSlides(slideIndices[slideshowIndex], slideshowIndex); // Show the updated slide
}

// Show Slides for a specific slideshow
function showSlides(n, slideshowIndex) {
  const container = document.querySelector(
    `.slideshow-container[data-index="${slideshowIndex}"]`
  );

  // Retrieve all slides and dots for the specific slideshow
  const slides = container.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(
    `.dots:nth-of-type(${slideshowIndex}) .dot`
  );

  // Reset slide index if it goes out of bounds
  if (n > slides.length) {
    slideIndices[slideshowIndex] = 1;
  }
  if (n < 1) {
    slideIndices[slideshowIndex] = slides.length;
  }

  // Remove the "show" class from all slides and deactivate dots
  slides.forEach((slide) => slide.classList.remove("show"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Add the "show" class to the current slide and activate the corresponding dot
  slides[slideIndices[slideshowIndex] - 1].classList.add("show");
  if (dots.length) {
    dots[slideIndices[slideshowIndex] - 1].classList.add("active");
  }
}

//PRODUCT PAGE CODE

let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const totalSlides = slides.length;

  // Wrap around slide index
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  // Update the slider position
  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update dot styles
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function changeSlide(direction) {
  showSlide(currentIndex + direction);
}

function currentSlide(index) {
  showSlide(index - 1);
}

// Initialize the slider
showSlide(currentIndex);
