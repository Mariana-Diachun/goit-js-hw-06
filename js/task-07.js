const inputEl = document.querySelector('#font-size-control');
console.log(inputEl);

const spanEl = document.querySelector('#text');
console.log(spanEl);

inputEl.addEventListener('input', (event) => {
    spanEl.style.fontSize = `${event.currentTarget.value}px`
});