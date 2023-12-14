const buttons = document.querySelectorAll(".button");

const allBnt = document.querySelector(".allBnt");
const scooterBnt = document.querySelector(".scooterBnt");
const atvBnt = document.querySelector(".atvBnt");
const jeepBnt = document.querySelector(".jeepBnt");

const scooterCards = document.querySelector(".scooterCards");
const atvCards = document.querySelector(".atvCards");
const jeepCards = document.querySelector(".jeepCards");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(link => {
            link.classList.remove("color");
        });
        button.classList.add("color");
    })
})

allBnt.addEventListener("click", () => {
    scooterCards.classList.add("show");
    atvCards.classList.add("show");
    jeepCards.classList.add("show");
})

scooterBnt.addEventListener("click", () => {
    scooterCards.classList.add("show");
    atvCards.classList.remove("show");
    jeepCards.classList.remove("show");
})

atvBnt.addEventListener("click", () => {
    scooterCards.classList.remove("show");
    atvCards.classList.add("show");
    jeepCards.classList.remove("show");
})

jeepBnt.addEventListener("click", () => {
    scooterCards.classList.remove("show");
    atvCards.classList.remove("show");
    jeepCards.classList.add("show");
})