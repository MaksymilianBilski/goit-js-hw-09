const delayInput = document.querySelector('input[name=delay]');
const stepInput = document.querySelector('input[name=step]');
const amountInput = document.querySelector('input[name=amount]');
const buttonCreate = document.querySelector('button[type=submit]');
const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
        // Fulfill
      } else {
        reject({ position, delay });
        // Reject
      }
    }),
      delay;
  });
}
const addPromises = e => {
  e.preventDefault();
  let waitDelay = Number(delayInput.value);
  let step = Number(stepInput.value);

  for (let i = 0; i <= amountInput.value; i++) {
    createPromise(i, waitDelay)
      .then(() => {
        console.log({ i, delay });
      })
      .catch(() => {
        console.log('error');
      });
    waitDelay += step;
  }
};

form.addEventListener('submit', addPromises);
