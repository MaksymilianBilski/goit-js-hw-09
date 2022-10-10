//input / button
const timeInput = document.getElementById('datetime-picker');
const button = document.querySelector('[type="button"]');
const func = () => {
  console.log('test');
};
button.addEventListener('click', func);
//

//catcihng time fields
const daysCounter = document.querySelector('.value[data-days]');
const hoursCounter = document.querySelector('.value[data-hours]');
const minutesCounter = document.querySelector('.value[data-minutes]');
const secondsCounter = document.querySelector('.value[data-seconds]');
//

//time getters
const date = new Date();
const monthDay = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
//

console.log(minutes);
