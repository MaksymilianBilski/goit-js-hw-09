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
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', () => {
  for (let i = 0; i <= amountInput.value; i++) {
    createPromise(i, delayInput.value)
      .then(({ position, delay }) => {
        console.log({ position, delay });
      })
      .catch(({ position, delay }) => {
        console.log({ position, delay });
      });
  }
});
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (resolve) {
//       createPromise();
//     } else if (reject) {
//       console.log('test');
//     }
//   }, 1000);
// });
