
let currentYear = new Date().getFullYear();
document.querySelector("#currentYear").innerHTML = currentYear;


let lastModified = document.lastModified;
document.querySelector("#lastModifided").innerText = "Last Modification: " + lastModified;


const pageVisits = document.querySelector(".pageVisits");

let numVisits = Number(localStorage.getItem("numVisits")) || 0;

if (numVisits !== 0) {
    pageVisits.textContent = "Page Visits: " + numVisits;
}
else {
    pageVisits.textContent = "Page Visits: This is your first time!!";
}

numVisits++;

localStorage.setItem("numVisits", numVisits)