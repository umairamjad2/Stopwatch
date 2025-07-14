let [second, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("display-time");
let startBtn = document.getElementById("Start-btn");
let stopBtn = document.getElementById("Stop-btn");
let ResetBtn = document.getElementById("Reset-btn");

let timer = null;

function StopWatch() {
  second++;
  if (second === 60) {
    second = 0;
    minutes++;   
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  displayTime.innerText = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
}
function WatchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(StopWatch, 1000);
}
function WatchStop() {
  clearInterval(timer);
}
function WatchReset() {
  clearInterval(timer);
  [second, minutes, hours] = [0, 0, 0];
  displayTime.innerText = "00:00:00";
}

startBtn.addEventListener("click", WatchStart);
stopBtn.addEventListener("click", WatchStop);
ResetBtn.addEventListener("click", WatchReset);
