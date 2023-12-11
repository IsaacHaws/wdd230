const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector(".menu");


menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
})


const banner = document.querySelector(".banner")
const bannerButton = document.querySelector(".banner a");

bannerButton.addEventListener("click", () => {
    banner.classList.toggle("close");
})


//Last Modified
let lastModified = document.lastModified;

document.querySelector("#lastModified").innerHTML = "Last Modified: <br>" + lastModified;

//Cuurent Year
let currentYear = new Date().getFullYear();

document.querySelector("#currentYear").innerHTML = currentYear;
