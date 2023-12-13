
const rentalSelect = document.querySelector("select");

const priceDisplay = document.querySelector("#price");
const priceMsg = document.querySelector("#priceMsg");


rentalSelect.addEventListener("change", () => {
    const rentalprice = parseInt(rentalSelect.value) + 50;

    priceDisplay.innerHTML = "Estimated Price: $" + rentalprice + "*";
    priceMsg.innerHTML = "*Estimated price includes $50 security deposit";
})