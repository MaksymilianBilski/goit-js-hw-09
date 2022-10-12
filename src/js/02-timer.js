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

const secondCounter = () =>
  setInterval(() => {
    return new Date().getTime();
  }, 1000); //---> odliczanie czasu co sekunde

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  daysCounter.innerHTML = days;
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// setInterval(() => {
//   console.log(
//     convertMs(new Date().getTime() - calendar.selectedDates[0].getSeconds())
//   );
// }, 1000);

const calendar = flatpickr(timeInput, options);
calendar.config.onChange.push(function an() {
  setInterval(() => {
    console.log(
      convertMs(new Date().getTime() - calendar.selectedDates[0].getSeconds())
    );
  }, 1000);
});

calendar.config.onChange();
// const timeDifference = () => {
//   console.log(
//     setTimeout(() => {
//       secondCounter() - calendar.selectedDates[0].getSeconds();
//     }, 1000)
//   );
// };
// setInterval(() => {
//   timeDifference();
// }, 1000);
button.addEventListener('click', () => {
  secondsCounter.innerHTML = seconds;
  minutesCounter.innerHTML = calendar.selectedDates[0].getMinutes();
  hoursCounter.innerHTML = calendar.selectedDates[0].getHours();
  daysCounter.innerHTML = calendar.selectedDates[0].getDay();
});
