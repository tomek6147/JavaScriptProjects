//Countdown function

function Countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}





let slideIndex = 1;// Initialize slideIndex to start at the first slide
showSlides(slideIndex);// Display the initial slide when the page loads

function plusSlides(n) {// Function to navigate to the next or previous slide
  showSlides(slideIndex += n);
}

function currentSlide(n) {// Function to navigate to a specific slide
  showSlides(slideIndex = n);
}

function showSlides(n) {// Main function to control slide display and dot activation
  let i;
  let slides = document.getElementsByClassName("mySlides"); // Get references to all slide elements
  let dots = document.getElementsByClassName("dot");// Get references to all dot elements
  if (n > slides.length) {slideIndex = 1}   // If slide index goes beyond the last slide, reset to the first slide 
  if (n < 1) {slideIndex = slides.length}   // If slide index goes before the first slide, set to the last slide
  for (i = 0; i < slides.length; i++) {     // Hide all slides
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {       // Remove "active" class from all dots
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; // Display the current slide 
  dots[slideIndex-1].className += " active";    // Add "active" class to the dot corresponding to the current slide
}