function checkPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    console.log(password, confirmPassword);
    let message = document.getElementById("")

    if (password.length !== 0) {
        if (password === confirmPassword) {
            message.textContent = "Passwords Match"
        } else {
            message.textContent = "Password Don't Match"
        }
    }
}