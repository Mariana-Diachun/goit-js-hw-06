const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

// console.log(typeof Number(inputEl.dataset.length))
// console.log(inputEl.value.length)
inputEl.addEventListener("blur", () => {
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        return inputEl.classList.add('valid');
    } else
        return inputEl.classList.replace('valid', 'invalid');
});


