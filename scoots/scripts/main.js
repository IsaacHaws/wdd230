const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");


menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open")
})


//Last Modified
let lastModified = document.lastModified;

document.querySelector("#lastModified").innerHTML = "Last Modified: " + lastModified;

//Cuurent Year
let currentYear = new Date().getFullYear();

document.querySelector("#currentYear").innerHTML = currentYear;
