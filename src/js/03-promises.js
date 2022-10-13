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
    }, delay);
  });
}
const addPromises = e => {
  e.preventDefault();
  let waitDelay = Number(delayInput.value);
  let step = Number(stepInput.value);

  for (let i = 1; i <= amountInput.value; i++) {
    createPromise(i, waitDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    waitDelay += step;
  }
};

form.addEventListener('submit', addPromises);
