//Счетчик
const counterValue = 0;
const counterPath = document.querySelector('#value');

//Кнопки
const addCounterBtn = document.querySelector('[data-action="increment"]');
const reduceCounterBtn = document.querySelector('[data-action="decrement"]');
console.log(addCounterBtn);

const addCounterPoint = () => {
    console.log('click event listener callback add');
}
const reduceCounterPoint = () => {
    console.log('click event listener callback reduce');
};

//Слушатели событий
addCounterBtn.addEventListener('click', addCounterPoint);
reduceCounterBtn.addEventListener('click', reduceCounterPoint);
