let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapSeconds = 0;
let lapMinutes = 0;
let lapHours = 0;

function startStop() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  } else {
    timer = setInterval(updateTime, 1000);
  }
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function updateTime() {
  seconds++;
  lapSeconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const timeString = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
  document.getElementById('time').innerText = timeString;

  const lapTimeString = `Lap Time: ${padNumber(lapHours)}:${padNumber(lapMinutes)}:${padNumber(lapSeconds)}`;
  document.getElementById('lapTime').innerText = lapTimeString;
}

function lap() {
  const lapTimeString = `Lap Time: ${padNumber(lapHours)}:${padNumber(lapMinutes)}:${padNumber(lapSeconds)}`;
  const lapTimeElement = document.createElement('div');
  lapTimeElement.className = 'lap';
  lapTimeElement.innerText = lapTimeString;
  document.getElementById('stopwatch').appendChild(lapTimeElement);

  lapSeconds = 0;
  lapMinutes = 0;
  lapHours = 0;
}

function reset() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  lapSeconds = 0;
  lapMinutes = 0;
  lapHours = 0;
  document.getElementById('time').innerText = '00:00:00';
  document.getElementById('lapTime').innerText = 'Lap Time: ';
  document.getElementById('stopwatch').innerHTML = ''; // Clear lap times
}

function padNumber(number) {
  return number.toString().padStart(2, '0');
}
