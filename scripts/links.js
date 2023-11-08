const baseUrl = "https://isaachaws.github.io/wdd230/";

const linksUrl = "https://isaachaws.github.io/wdd230/data/links.json";

const ulList = document.querySelector(".card ul");

async function getLinkData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
}

function displayLinks(weeks) {
    weeks.lessons.forEach(week => {
        let newWeek = document.createElement("li");

        for (let i = 0; i < week.links.length; i++) {
            let a = document.createElement("a");
        
            a.setAttribute("href", week.links[i].url);
            a.innerHTML = week.links[i].title;

            if (i != 0) {
                newWeek.append(" | ");
            }

            newWeek.appendChild(a);
        }
        ulList.appendChild(newWeek);
    });  
}

getLinkData(linksUrl);