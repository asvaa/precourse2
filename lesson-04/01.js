const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const clockElement = document.getElementById("clock");

let intervalId = null;

function startClock() {
  if (!intervalId) {
    intervalId = setInterval(updateClock, 1000);
  }
}

function stopClock() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

startButton.addEventListener("click", startClock);
stopButton.addEventListener("click", stopClock);
