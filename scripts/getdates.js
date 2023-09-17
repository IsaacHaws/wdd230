
let currentYear = new Date().getFullYear();
document.querySelector("#currentYear").innerHTML = currentYear;


let lastModified = document.lastModified;
document.querySelector("#lastModifided").innerText = "Last Modification: " + lastModified;