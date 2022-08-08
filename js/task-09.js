function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');

const spanEl = document.querySelector('.color');

const body = document.querySelector('body');

buttonEl.addEventListener('click', onButtonEl);

function onButtonEl(event) {
  event.preventDefault();
  const randomColorEl = getRandomHexColor();
  spanEl.textContent = randomColorEl;
  body.style.backgroundColor = randomColorEl;
}
