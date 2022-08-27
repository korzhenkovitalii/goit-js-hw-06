function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');

const btnChangeColor = document.querySelector('.change-color');

const spanColor = document.querySelector('.color');

btnChangeColor.addEventListener('click', onBtnChangeColor);

function onBtnChangeColor(event) {
  body.style.backgroundColor = spanColor.style.backgroundColor = getRandomHexColor();

  spanColor.textContent = getRandomHexColor();
}
