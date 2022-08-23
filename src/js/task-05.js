// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);

function onInput(event) {
  spanEl.textContent = event.currentTarget.value;

  if (event.currentTarget.value === '') {
    spanEl.textContent = 'Anonymous';
  }
}
