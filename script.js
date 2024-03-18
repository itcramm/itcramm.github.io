const blobElement = document.getElementById('blob');
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

let previousCursorX = 0;
let previousCursorY = 0;

function handleMouseMove(event) {
  const cursorX = event.clientX / viewportWidth;
  const cursorY = event.clientY / viewportHeight;


  const movementAmplitude = 900; 
  const decayFactor = 0.35; 

  const movementOffset = {
    x: (cursorX - previousCursorX) * movementAmplitude * decayFactor,
    y: (cursorY - previousCursorY) * movementAmplitude * decayFactor,
  };


  previousCursorX = cursorX;
  previousCursorY = cursorY;

  blobElement.style.transform = `translate(-50%, -50%) translateX(${movementOffset.x}px) translateY(${movementOffset.y}px) scale(1.02, 1.02)`; // Add subtle scaling for emphasis
}

window.addEventListener('mousemove', handleMouseMove);