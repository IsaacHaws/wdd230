
let lastModified = document.lastModified;
document.querySelector("#lastModified").innerHTML = "Last Modification: " + lastModified;


const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open")
})



const banner = document.querySelector("#banner");
const bannerBnt = document.querySelector("#bannerBnt");

bannerBnt.addEventListener("click", () => {
    banner.classList.toggle("close");
    navigation.classList.toggle("close");
})


let dayOfWeek = new Date().getDay()

dayOfWeek = 2;

if ((dayOfWeek == 1) || (dayOfWeek == 2) || (dayOfWeek == 3)) {
    
}
else {
    banner.style.display = "none";
}