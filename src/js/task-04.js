//Счетчик
let counterValue = 0;
const pathToCounter = document.querySelector('#value');

//Кнопки
const incrementCounterBtn = document.querySelector('[data-action="increment"]');
const decrementCounterBtn = document.querySelector('[data-action="decrement"]');

//Слушатели событий
incrementCounterBtn.addEventListener('click', () => {
  counterValue += 1;

  pathToCounter.textContent = counterValue;
});

decrementCounterBtn.addEventListener('click', () => {
  counterValue -= 1;

  pathToCounter.textContent = counterValue;
});
