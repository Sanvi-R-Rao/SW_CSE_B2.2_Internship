const colorText = document.getElementById('color-code');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

function getRandomHex() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
}

function updateColor() {
  const newColor = getRandomHex();
  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor;
}

generateBtn.addEventListener('click', updateColor);

