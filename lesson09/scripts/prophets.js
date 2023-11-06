const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data);
    displayProphets(data.prophets);

}


const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let dateOfBirth = document.createElement("p");
        let placeOfBirth = document.createElement("p");
        let portrait  = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Picture of ${prophet.name} ${prophet.lastName}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `Plave of Birth: ${prophet.birthplace}`;

        card.appendChild(fullName);
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);
         
        cards.appendChild(card);
    });
}

getProphetData(url);