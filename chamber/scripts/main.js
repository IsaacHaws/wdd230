
let lastModified = document.lastModified;
document.querySelector("#lastModified").innerHTML = "Last Modification: " + lastModified;


const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open")
})