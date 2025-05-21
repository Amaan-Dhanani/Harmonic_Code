// Function to animate the image
// @ts-ignore
export function animateImage(imageElement) {
  // @ts-ignore
  let startTime = null;
  const duration = 1500; // Duration of the animation in milliseconds (5 seconds)
  
  // Function to calculate sine wave and opacity
  // @ts-ignore
  function updateAnimation(timestamp) {
    // @ts-ignore
    if (!startTime) startTime = timestamp;

    const progress = (timestamp - startTime) / duration; // Calculate the progress of the animation (0 to 1)
    
    if (progress < 1) {
      // Calculate the sine wave for horizontal movement (right to left)
      const sineWave = Math.sin(progress * Math.PI); // Sin function varies between -1 and 1

      // Update the image position based on sine wave (move from right to left)
      imageElement.style.transform = `translateX(${sineWave * 100}%)`; // Move right-to-left

      // Fade in the image (opacity goes from 0 to 1)
      imageElement.style.opacity = progress;

      // Continue the animation until it reaches the end
      requestAnimationFrame(updateAnimation);
    } else {
      // Make sure the image ends at the correct position
      imageElement.style.transform = 'translateX(0%)';
      imageElement.style.opacity = 1;
    }
  }

  // Start the animation loop
  requestAnimationFrame(updateAnimation);
}
