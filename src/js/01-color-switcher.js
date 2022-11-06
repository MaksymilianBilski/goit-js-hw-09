// const btnStart = document.querySelector('[type="button"][data-start]');
// const btnStop = document.querySelector('[type="button"][data-stop]');
// const body = document.querySelector('body');
// let timerId = null;

// btnStart.style.cursor = 'cell';
// btnStop.style.cursor = 'cell';

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const startColor = evt => {
//   evt.target.setAttribute('disabled', '');
//   timerId = setInterval(() => {
//     body.style.backgroundColor = getRandomHexColor();
//   }, 1000);
// };

// const disableColor = () => {
//   btnStart.removeAttribute('disabled', '');
//   const stopColor = clearInterval(timerId);
// };

// btnStart.addEventListener('click', startColor);
// btnStop.addEventListener('click', disableColor);

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let colorInterval;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  colorInterval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.setAttribute('disabled', 'disabled');
}

const stopColor = () => {
  if (btnStart.hasAttribute('disabled')) {
    clearInterval(colorInterval);
    btnStart.removeAttribute('disabled');
  }
};

btnStart.addEventListener('click', changeColor);
btnStop.addEventListener('click', stopColor);
