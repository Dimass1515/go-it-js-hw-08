const loginForm = document.querySelector(".login-form");
const formData = {};

const checkForm = (stopEvent) => {
    stopEvent.preventDefault();

    const formDataObj = Array.from(loginForm.elements).reduce((data, element) => {
        if (element.type !== 'submit') {
            data[element.name] = element.value.trim();
        }
        return data;
    }, {});

    const checkEmail = formDataObj.email;
    const checkPassword = formDataObj.password;

    if (checkEmail.length < 1 || checkPassword.length < 1) {
        alert('All form fields must be filled in');
    } else {
        formData.password = checkPassword;
        formData.email = checkEmail;
        console.log(formData);
        loginForm.reset();
    }
}

loginForm.addEventListener("submit", checkForm);
