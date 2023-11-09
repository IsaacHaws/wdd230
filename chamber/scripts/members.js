const url = "https://isaachaws.github.io/wdd230/chamber/data/members.json";

const gridButton = document.querySelector("#gridView");
const listButton = document.querySelector("#listView");

const cards = document.querySelector(".grid");


async function getMemberData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.companys);
    displayMembers(data.companys);
}


function displayMembers(members) {
    members.forEach((member) => {
        let card = document.createElement("section");

        let companyName = document.createElement("p");
        let address = document.createElement("p");
        let phoneNum = document.createElement("p")
        let logo = document.createElement("img");
        let webLink = document.createElement("a")

        companyName.setAttribute("class", "cardTitle")
        companyName.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phoneNum.textContent = `${member.phoneNum}`;

        logo.setAttribute("src", member.icon);
        logo.setAttribute("alt", `${member.name} Logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "150");
        logo.setAttribute("height", "auto");

        webLink.setAttribute("href", member.websiteURL);
        webLink.innerHTML = `${member.name}`;
        
        card.appendChild(logo);
        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(phoneNum);
        card.appendChild(webLink)

        cards.appendChild(card);
    });
}

getMemberData(url);


gridButton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
})

listButton.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
})