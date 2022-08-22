// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', testValidationInput);

function testValidationInput(event) {
  if (event.currentTarget.value.length === '') return;

  event.currentTarget.value.length == inputEl.dataset.length
    ? validStyleInput()
    : invalidStyleInput();
}

const validStyleInput = function () {
  inputEl.classList.add('valid');
  inputEl.classList.remove('invalid');
};

const invalidStyleInput = function () {
  inputEl.classList.remove('valid');
  inputEl.classList.add('invalid');
};
