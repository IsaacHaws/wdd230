const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector(".menu");


menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
})

//Last Modified
let lastModified = document.lastModified;

document.querySelector("#lastModified").innerHTML = "Last Modified: <br>" + lastModified;

//Cuurent Year
let currentYear = new Date().getFullYear();

document.querySelector("#currentYear").innerHTML = currentYear;
