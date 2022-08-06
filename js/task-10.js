function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const input = document.querySelector('input');
console.log(input);

const buttonCreate = document.querySelector('button[data-create]');
console.log(buttonCreate);

const buttonDestroy = document.querySelector('button[data-destroy]');
console.log(buttonDestroy);

const container = document.querySelector('#boxes');
console.log(container);

const elements = {
  divControls: document.querySelector('#controls'),
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  container: document.querySelector('#boxes'),
}

elements.buttonCreate.addEventListener('click', createBoxes);


function createBoxes(amount) {
  let box = `<div style = "width: ${quantity}px; height: ${quantity}px; background-color: ${color};"></div>`;
  // console.log(box);
  color = getRandomHexColor();
}

console.log(createBoxes())


