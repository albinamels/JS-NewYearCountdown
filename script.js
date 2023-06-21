const yearEl = document.querySelector('#year')
const daysEl = document.querySelector('#days')
const hoursEl = document.querySelector('#hours')
const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')

const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1; 
//console.log(currentYear, nextYear);
yearEl.innerText = nextYear;


const timeCountdown = () => {
  const currentTime = new Date();
  const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)
  const totalSeconds = (newYearTime-currentTime)/1000;
  const days = Math.floor(totalSeconds / 3600 / 24); // totalSeconds / (60sec*60min) / 24 hours
  const hours = Math.floor((totalSeconds / 3600) % 24); // totalSeconds / (60sec*60min) / remainder of 24 hours
  const minutes = Math.floor((totalSeconds / 60) % 60); // totalSeconds / 60sec / remainder of 60 min
  const seconds = Math.floor(totalSeconds % 60); // totalSeconds / remainder of 60 sec

  daysEl.textContent = formatTime(days);
  hoursEl.textContent = formatTime(hours);
  minutesEl.textContent = formatTime(minutes);
  secondsEl.textContent = formatTime(seconds);
}

const formatTime = (time) => {
  return time > 9 ? time : `0${time}`;
}

setInterval(timeCountdown, 1000);

