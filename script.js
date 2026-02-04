//your JS code here. If required.
const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']; // Example colors
const SQUARES = 800; // Requirement: 800 boxes

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square'); // Requirement: class "square"

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  // Revert to original background
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}