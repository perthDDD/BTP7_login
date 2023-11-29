const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "XsGBVzVfCS" && password === "rukF53zw7Q") {
        alert("You have successfully logged in.");
        window.open("https://funky-wave-252.notion.site/BTP7-8435a3ea2c654214a905d3dbd9684c85?pvs=4");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
