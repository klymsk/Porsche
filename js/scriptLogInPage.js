function registrationMenu() {
    const registerForm = document.getElementById("registrationForm");
    const registrationButton = document.getElementById("registerButton");

    registrationButton.addEventListener("click", function() {
        if (registerForm.style.display === "none") {
            registerForm.style.display = "flex";
        }
        else {
            registerForm.style.display = "none";
        }
    });
};

registrationMenu();

document.getElementById("registerButtonAction").addEventListener("click", function() {
    const login = document.getElementById("registerLoginInput").value;
    const password = document.getElementById("registerPasswordInput").value;

    if (login && password) {
        const userData = {
            login: login,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(userData));

        alert("Ви успішно зареєструвалися!");

        const registrationForm = document.getElementById("registrationForm");
        registrationForm.style.display = "none";

        document.getElementById('registerLoginInput').value = '';
        document.getElementById('registerPasswordInput').value = '';
    }
    else {
        alert("Не всі поля заповнено!");
    }
});

document.getElementById("loginButton").addEventListener("click", function() {
    const loginCheck = document.getElementById("loginInput");
    const passwordCheck = document.getElementById("passwordInput");

    const localStorageData = localStorage.getItem("user");

    if (localStorageData) {
        const userData = JSON.parse(localStorageData);

        if (loginCheck.value === userData.login && passwordCheck.value === userData.password) {
            alert("Вхід успішний!");
        }
        else {
            alert('Невірний логін або пароль!');
        }
    }
    else {
        alert('Ви ще не зареєстровані!');
    }
});
