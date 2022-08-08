const firstButton = document.querySelector('button[data-action="decrement"]');
const secondButton = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('#value');

let counterValue = 0;


firstButton.addEventListener("click", () => {
    counterValue -= 1;
return  counterEl.textContent = counterValue
})

secondButton.addEventListener("click", () => {
    counterValue += 1;
return  counterEl.textContent = counterValue
})


