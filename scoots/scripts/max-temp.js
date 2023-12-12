const banner = document.querySelector(".banner")
const bannerButton = document.querySelector(".banner a");

bannerButton.addEventListener("click", () => {
    banner.classList.toggle("close");
})