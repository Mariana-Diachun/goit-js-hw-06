const textInput = document.querySelector('#name-input');

// console.log(textInput);

const output = document.querySelector('#name-output');

// console.log(output);

textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
});