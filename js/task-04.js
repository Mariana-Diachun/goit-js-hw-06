const firstButton = document.querySelector('button[data-action="decrement"]');
console.log(firstButton);
const secondButton = document.querySelector('button[data-action="increment"]');
console.log(secondButton);
const counterEl = document.querySelector('#value');
console.log(counterEl);

let counterValue = 0;


firstButton.addEventListener("click", () => {
    counterValue -= 1;
return  counterEl.textContent = counterValue
})

secondButton.addEventListener("click", () => {
    counterValue += 1;
return  counterEl.textContent = counterValue
})


