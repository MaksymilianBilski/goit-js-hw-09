// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const delayInput = document.querySelector('input[name=delay]');
// const stepInput = document.querySelector('input[name=step]');
// const amountInput = document.querySelector('input[name=amount]');
// const buttonCreate = document.querySelector('button[type=submit]');
// const form = document.querySelector('.form');

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         resolve({ position, delay });
//         // Fulfill
//       } else {
//         reject({ position, delay });
//         // Reject
//       }
//     }, delay);
//   });
// }
// const addPromises = e => {
//   e.preventDefault();
//   let waitDelay = Number(delayInput.value);
//   let step = Number(stepInput.value);

//   for (let i = 1; i <= amountInput.value; i++) {
//     createPromise(i, waitDelay)
//       .then(({ position, delay }) => {
//         Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//     waitDelay += step;
//   }
// };

// form.addEventListener('submit', addPromises);

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayInput = document.querySelector('input[name=delay]');
const stepInput = document.querySelector('input[name=step]');
const amountInput = document.querySelector('input[name=amount]');
const buttonCreate = document.querySelector('button[type=submit]');
const form = document.querySelector('.form');
let delay = delayInput.value;
let step = stepInput.value;

function createPromises(position, delay) {
  const shouldResolve = Math.random() < 0.3;
  if (shouldResolve) {
    return({ position, delay });
  }
  else {
    return({ position, delay });
  }
}

function addPromises(e) {
  e.preventDefault();
  for (let i = 0; i <= amountInput.value; i++) {
    new Promise = createPromises((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() < 0.3;
        if (shouldResolve) {
          resolve({ position, delay });
        }
        else {
          reject({ position, delay });
        }
      }, delay)
    }).then(({ position, delay }) => {
      Notify.success('sukces' + { position, delay })
    }).catch(({ position, delay }) => {
      Notify.failure('failure' + { position, delay })
    })
  }
  delay += step;
}

form.addEventListener("submit", addPromises)