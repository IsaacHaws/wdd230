
const rangeValue = document.querySelector("#rangeValue");

const range = document.querySelector("#rating");

range.addEventListener("change", () => {
    rangeValue.innerHTML = range.value;
});


const pass1 = document.querySelector("#pass1");
const pass2 = document.querySelector("#pass2");

const errorMsg = document.querySelector("#passError");

pass2.addEventListener("focusout", checkPassword)


function checkPassword() {
    if (pass1.value !== pass2.value) {
        errorMsg.textContent = "Passwords Do Not Match!";
        errorMsg.style.visibility = "show";
        pass2.value = "";
        pass2.style.background = "#90ADC6";
        pass2.focus();
    }
}
