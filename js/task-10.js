function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const elements = {
  divControls: document.querySelector('#controls'),
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  container: document.querySelector('#boxes'),
}

elements.buttonCreate.addEventListener('click', createBoxes);

let quantity = 30;

function createBoxes() {
  let boxArray = [];
  let amount = elements.input.value;


  for (let i = 0; i < amount; i += 1) {
    let color = getRandomHexColor();
    
    let box = `<div style = "width: ${quantity}px; height: ${quantity}px; background-color: ${color};"></div>`;
    quantity += 10;
    boxArray.push(box);
  }

  elements.container.insertAdjacentHTML("beforeend",boxArray.join(""));
}

elements.buttonDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
elements.container.innerHTML = '';
quantity = 30;
}
