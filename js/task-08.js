const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return console.log("Alert!!! Please fill in all the fields!");
    } else
        console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
})
