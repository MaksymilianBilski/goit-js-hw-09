import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

//input / button
const timeInput = document.getElementById('datetime-picker');
const button = document.querySelector('[type="button"]');
//

//catcihng time fields
const daysCounter = document.querySelector('.value[data-days]');
const hoursCounter = document.querySelector('.value[data-hours]');
const minutesCounter = document.querySelector('.value[data-minutes]');
const secondsCounter = document.querySelector('.value[data-seconds]');
//

//time getters
const date = new Date();
const time = date.getTime();
const monthDay = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
//

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (
      Math.round(selectedDates[0].getTime() / 2.99999986) <
      Math.round(new Date().getTime() / 3)
    ) {
      button.setAttribute('disabled', '');
      alert('Please choose a date in the future');
    } else {
      button.removeAttribute('disabled');
    }
  },
};

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
let counterObject = 0;
const calendar = flatpickr(timeInput, options);

//refresh the page to change the counter
// let onCloseCheck;
// let isClickedCheck;
// calendar.config.onClose.push(function close() {
//   onCloseCheck = true;
//   console.log(onCloseCheck);
// });

// button.addEventListener('click', () => {
//   isClickedCheck = true;
//   if (isClickedCheck === true && onCloseCheck === true) {
//     button.setAttribute('disabled', '');
//     console.log(button.hasAttribute('disabled'));
//   }
// });
//refresh the page to change the counter

const countDown = () => {
  calendar.config.onChange.push(function difference() {
    setInterval(() => {
      counterObject = convertMs(
        calendar.selectedDates[0].getTime() - new Date().getTime()
      );
      secondsCounter.innerHTML = counterObject.seconds;
      minutesCounter.innerHTML = counterObject.minutes;
      hoursCounter.innerHTML = counterObject.hours;
      daysCounter.innerHTML = counterObject.days;
      function addLeadingZero(value) {
        if (
          counterObject.seconds <= 9 ||
          counterObject.minutes <= 9 ||
          counterObject.hours <= 9 ||
          counterObject.days <= 9
        ) {
          secondsCounter.innerHTML = secondsCounter.textContent.padStart(
            2,
            '0'
          );
          minutesCounter.innerHTML = minutesCounter.textContent.padStart(
            2,
            '0'
          );
          hoursCounter.innerHTML = hoursCounter.textContent.padStart(2, '0');
          daysCounter.innerHTML = daysCounter.textContent.padStart(2, '0');
        }
      }
      addLeadingZero();
    }, 1000);
  });
  console.log('dupa');
};

button.addEventListener('click', countDown);
