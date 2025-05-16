const showPasswordBtn = document.getElementById("showPasswordBtn");

showPasswordBtn.addEventListener("click",toggleVisibility);

function toggleVisibility() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type == "password"){
        passwordInput.type = "text";
        showPasswordBtn.innerText = "visibility_off";
    } else {
        passwordInput.type = "password";
        showPasswordBtn.innerText = "visibility";
    }

}



