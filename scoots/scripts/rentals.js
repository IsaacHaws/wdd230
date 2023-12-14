const pricesUrl = "https://isaachaws.github.io/wdd230/scoots/data/prices.json";

async function getPriceData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.rentals);
    displayScooters(data.rentals);
    displayAtvs(data.rentals);
    displayJeeps(data.rentals);
}


const scooterCard = document.querySelector(".scooterCards");
const atvCard = document.querySelector(".atvCards");
const jeepCard = document.querySelector(".jeepCards");


function displayScooters(data) {
    for (let i = 0; i <= 2; i++) {
        let rentalCard = document.createElement("div");
        rentalCard.className = "rentalCard"

        let scooterImg = document.createElement("img");
        scooterImg.setAttribute("src", data[i].img);
        scooterImg.setAttribute("alt", data[i].name);

        let cardInfo = document.createElement("div");
        cardInfo.className = "cardInfo";

        let reservation = document.createElement("div");
        let walkIn = document.createElement("div");
        let maxLoad = document.createElement("div");
        reservation.innerHTML = "Reservation: <br>$" + data[i].prices.resvervation + "/hour";
        walkIn.innerHTML = "Walk-In: <br>$" + data[i].prices.walkIn + "/hour";
        maxLoad.innerHTML = "Max Load: " + data[i].maximumLoad

        cardInfo.appendChild(reservation);
        cardInfo.appendChild(walkIn);

        let rentBnt = document.createElement("div");
        
        let rentLink = document.createElement("a")
        rentLink.setAttribute("href", "reservations.html")
        rentLink.innerHTML = "Rent Scooter";
        rentBnt.appendChild(rentLink);
        rentBnt.className = "cardBnt";

        rentalCard.appendChild(scooterImg);
        rentalCard.appendChild(cardInfo);
        rentalCard.appendChild(rentBnt);

        scooterCard.appendChild(rentalCard);
    } 
}

function displayAtvs(data) {
    let rentalCard = document.createElement("div");
    rentalCard.className = "rentalCard"

    let atvImg = document.createElement("img");
    atvImg.setAttribute("src", data[3].img);
    atvImg.setAttribute("alt", data[3].name);

    let cardInfo = document.createElement("div");
    cardInfo.className = "cardInfo";

    let reservation = document.createElement("div");
    let walkIn = document.createElement("div");
    let maxLoad = document.createElement("div");
    reservation.innerHTML = "Reservation: <br>$" + data[3].prices.resvervation + "/hour";
    walkIn.innerHTML = "Walk-In: <br>$" + data[3].prices.walkIn + "/hour";
    maxLoad.innerHTML = "Max Load: " + data[3].maximumLoad

    cardInfo.appendChild(reservation);
    cardInfo.appendChild(walkIn);

    let rentBnt = document.createElement("div");
        
    let rentLink = document.createElement("a")
    rentLink.setAttribute("href", "reservations.html")
    rentLink.innerHTML = "Rent ATV";
    rentBnt.appendChild(rentLink);
    rentBnt.className = "cardBnt";

    rentalCard.appendChild(atvImg);
    rentalCard.appendChild(cardInfo);
    rentalCard.appendChild(rentBnt);

    atvCard.appendChild(rentalCard);
}
    
function displayJeeps(data) {
    for (let i = 4; i <= 6; i++) {
        let rentalCard = document.createElement("div");
        rentalCard.className = "rentalCard"

        let jeepImg = document.createElement("img");
        jeepImg.setAttribute("src", data[i].img);
        jeepImg.setAttribute("alt", data[i].name);

        let cardInfo = document.createElement("div");
        cardInfo.className = "cardInfo";

        let reservation = document.createElement("div");
        let walkIn = document.createElement("div");
        let maxLoad = document.createElement("div");
        reservation.innerHTML = "Reservation: <br>$" + data[i].prices.resvervation + "/hour";
        walkIn.innerHTML = "Walk-In: <br>$" + data[i].prices.walkIn + "/hour";
        maxLoad.innerHTML = "Max Load: " + data[i].maximumLoad

        cardInfo.appendChild(reservation);
        cardInfo.appendChild(walkIn);

        let rentBnt = document.createElement("div");
        
        let rentLink = document.createElement("a")
        rentLink.setAttribute("href", "reservations.html")
        rentLink.innerHTML = "Rent Jeep"
        rentBnt.appendChild(rentLink);
        rentBnt.className = "cardBnt";


        rentalCard.appendChild(jeepImg);
        rentalCard.appendChild(cardInfo);
        rentalCard.appendChild(rentBnt);

        jeepCard.appendChild(rentalCard);
    }  
}


getPriceData(pricesUrl);