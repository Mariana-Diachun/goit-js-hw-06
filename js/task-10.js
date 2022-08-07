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

let quantity = 30;

function createBoxes(amount) {
  let boxArray = [];

  for (let i = 0; i < amount; i += 1) {
    let color = getRandomHexColor();
    
    let box = `<div style = "width: ${quantity}px; height: ${quantity}px; background-color: ${color};"></div>`;
    quantity += 10;
    boxArray.push(box);
    console.log(boxArray);
  }

  elements.container.insertAdjacentHTML("beforeend",...boxArray);
  // console.log(box);
}

createBoxes(3);


