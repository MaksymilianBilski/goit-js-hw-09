const btnStart = document.querySelector('[type="button"][data-start]');
const btnStop = document.querySelector('[type="button"][data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyColor = () => {
  body.style.backgroundColor = getRandomHexColor();
};

const changeColor = setInterval(bodyColor, 1000);

const disableBtn = evt => {
  evt.target.setAttribute('disabled', '');
  console.log(evt.target);
  changeColor;
};
btnStart.addEventListener('click', disableBtn);

const renewBtn = evt => {
  btnStart.removeAttribute('disabled', '');
  clearInterval(changeColor);
};

btnStop.addEventListener('click', renewBtn);
