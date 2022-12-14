// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';

// //input / button
// const timeInput = document.getElementById('datetime-picker');
// const button = document.querySelector('[type="button"]');
// button.disabled = true;

// //catcihng time fields
// const daysCounter = document.querySelector('.value[data-days]');
// const hoursCounter = document.querySelector('.value[data-hours]');
// const minutesCounter = document.querySelector('.value[data-minutes]');
// const secondsCounter = document.querySelector('.value[data-seconds]');

// //time getters
// const date = new Date();
// const time = date.getTime();
// const monthDay = date.getDate();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

// //flatpickr options object
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0].getTime() < new Date().getTime()) {
//       button.disabled = true;
//       Notify.failure('Please choose a date in the future');
//       return;
//     } else if (selectedDates[0].getTime() > new Date().getTime()) {
//       button.disabled = false;
//     }
//   },
// };

// //function convert
// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// let counterObject = 0;
// const calendar = flatpickr(timeInput, options);

// const countDown = () => {
//   // converting the difference in MS to normal date
//   setInterval(() => {
//     counterObject = convertMs(
//       calendar.selectedDates[0].getTime() - new Date().getTime()
//     );
//     if (new Date().getTime() > calendar.selectedDates[0].getTime()) {
//       return;
//     } else secondsCounter.innerHTML = counterObject.seconds;
//     minutesCounter.innerHTML = counterObject.minutes;
//     hoursCounter.innerHTML = counterObject.hours;
//     daysCounter.innerHTML = counterObject.days;
//     //add zero in timers
//     function addLeadingZero(value) {
//       if (
//         counterObject.seconds <= 9 ||
//         counterObject.minutes <= 9 ||
//         counterObject.hours <= 9 ||
//         counterObject.days <= 9
//       ) {
//         secondsCounter.innerHTML = secondsCounter.textContent.padStart(2, '0');
//         minutesCounter.innerHTML = minutesCounter.textContent.padStart(2, '0');
//         hoursCounter.innerHTML = hoursCounter.textContent.padStart(2, '0');
//         daysCounter.innerHTML = daysCounter.textContent.padStart(2, '0');
//       }
//     }
//     addLeadingZero();
//   }, 1000);
//   button.disabled = true;
// };

// button.addEventListener('click', countDown);

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
let chosenTime = 0;
let timeDifference = 0;

const input = document.querySelector('#datetime-picker');
const btn = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chosenTime = selectedDates[0].getTime();
  },
};

const fp = flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const actualDateTimer = () => {
  const actualDate = new Date().getTime();
  return actualDate;
};

const timersDifference = () => {
  return (timeDifference = chosenTime - actualDateTimer());
};

function setTimer() {
  if (chosenTime < actualDateTimer()) {
    return Notify.failure('Please choose a date in the future');
  }
  const timerInterval = setInterval(() => {
    timersDifference();
    const dateSet = convertMs(timeDifference);
    days.innerText = dateSet.days;
    hours.innerText = dateSet.hours;
    minutes.innerText = dateSet.minutes;
    seconds.innerText = dateSet.seconds;
    if (days.innerText.length < 2) {
      days.innerText = '0' + days.innerText;
    }
    if (hours.innerText.length < 2) {
      hours.innerText = '0' + hours.innerText;
    }
    if (minutes.innerText.length < 2) {
      minutes.innerText = '0' + minutes.innerText;
    }
    if (seconds.innerText.length < 2) {
      seconds.innerText = '0' + seconds.innerText;
    }
    if (timeDifference <= 1000) {
      clearInterval(timerInterval);
    }
  }, 1000);
  btn.setAttribute('disabled', 'disabled');
}

btn.addEventListener('click', setTimer);
