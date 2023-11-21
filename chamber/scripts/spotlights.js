const url1 = "https://isaachaws.github.io/wdd230/chamber/data/members.json";

const spotlights1 = document.querySelector(".spotlights");

async function getChamberMembers() {
    const response = await fetch(url1);
    const data = await response.json();
    //console.log(data.companys);
    displayChamberMembers(data.companys);
}


function displayChamberMembers(data) {
    companys = data.filter(company => company.membershiplevel == "Silver Membership" || company.membershiplevel == "Gold Membership");
    
    let randomArray = [];
    
    for (let i = 1; i <= 2; i++) {
        let random = Math.floor(Math.random() * companys.length);

        if (randomArray.includes(random) == false) {
            let spotlightCard = document.createElement("div");
            let companyLogo = document.createElement("img");
            let companyMembership = document.createElement("p");
            let companyLink = document.createElement("a");
            let websiteLabel = document.createElement("h3");
            let companyName = companys[random].name;

            spotlightCard.setAttribute("class", "spotlightCard");

            companyLogo.setAttribute("src", companys[random].icon);
            companyLogo.setAttribute("alt", `${companyName}'s logo`);

            companyMembership.innerHTML = companys[random].membershiplevel;

            companyLink.setAttribute("href", companys[random].websiteURL);
            companyLink.innerHTML = companyName;
            websiteLabel.innerHTML = "Website:";

            spotlightCard.appendChild(companyLogo);
            spotlightCard.appendChild(companyMembership);
            
            spotlightCard.appendChild(websiteLabel);
            spotlightCard.appendChild(companyLink);
        
            spotlights1.appendChild(spotlightCard);
        }
        randomArray.push(random);
    }
}


getChamberMembers();