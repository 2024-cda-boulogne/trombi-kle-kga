var audio2 = new Audio('background_music.mp3');


document.addEventListener("DOMContentLoaded", function() {
    var triggerImage = document.getElementById("triggerImage");
    triggerImage.addEventListener("click", showAnimatedImage);
  });
  
  function showAnimatedImage() {
    var animatedImage = document.getElementById("animatedImage");
    audio2.play()
  
    // Position the animated image outside the viewport
    animatedImage.style.left = "-200px"; // Adjust this value to determine the starting position
  
    // Make the animated image visible
    animatedImage.style.display = "block";
  
    // Animate the image to slide in from the left and rotate
    var startPosition = -5000; // Starting position (outside the viewport)
    var endPosition = 0; // Ending position (position you want the image to end up)
    var animationDuration = 9000; // Animation duration in milliseconds
    var startTime = null;
  
    // Rotation variables
    var startRotation = 0; // Starting rotation angle
    var endRotation = 360; // Ending rotation angle (one full rotation)
    var rotationDuration = 2000; // Rotation duration in milliseconds
  
    function animateImage(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
  
      var newPosition = startPosition + (endPosition - startPosition) * (progress / animationDuration);
      animatedImage.style.left = newPosition + "px";
  
      // Calculate rotation angle based on progress
      var rotationProgress = timestamp % rotationDuration / rotationDuration;
      var newRotation = startRotation + (endRotation - startRotation) * rotationProgress;
  
      // Apply rotation to the image
      animatedImage.style.transform = "rotate(" + newRotation + "deg)";
  
      if (progress < animationDuration) {
        requestAnimationFrame(animateImage);
      }
    }
  
    requestAnimationFrame(animateImage);
  }
  