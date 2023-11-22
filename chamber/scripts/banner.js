const banner = document.querySelector("#banner");
const bannerBnt = document.querySelector("#bannerBnt");

bannerBnt.addEventListener("click", () => {
    banner.classList.toggle("close");
})


let dayOfWeek = new Date().getDay()

//dayOfWeek = 2;

if ((dayOfWeek == 1) || (dayOfWeek == 2) || (dayOfWeek == 3)) {
    banner.style.display = "show";
}
else {
    banner.style.display = "none";
}