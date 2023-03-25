const card_title = document.querySelector('.card-title')
card_title.innerHTML = 'Are you human?';



const bar = document.querySelector('.bar');
const icons = document.querySelectorAll('.icon');
const numIcons = icons.length;
let progress = 0;
let intervalId = null;

function updateProgress() {
  progress = Math.min(progress + 20, 100); // Update progress
  bar.style.width = `${progress}%`; // Update progress bar width
  const numFilled = Math.floor((progress / 100) * numIcons); // Calculate number of filled icons
  for (let i = 0; i < numFilled; i++) {
    icons[i].style.backgroundColor = '#4CAF50'; // Fill icons with green color
  }
  if (progress >= 100) {
    clearInterval(intervalId); // Stop the progress when it reaches 100%
  }
}

document.querySelector('#start-btn').addEventListener('click', () => {
  intervalId = setInterval(updateProgress, 1000); // Update progress every second
});
