const visitDateMsg = document.querySelector("#latestVisit");

//Milliseconds to days convertion rate
const msToDays = 84600000;

//Get the last visit date from local storage
let lastVisitDate = Number(localStorage.getItem("visitDate")) || 0;

//If the user has never visited display welcome message
if (lastVisitDate == 0) {
    visitDateMsg.innerHTML = "Welcome! Let us know if yopu have any questions";
}

//If user has visited before execute else statment
else {
    //Calculate how many days it has been since the user visited
    let daysAgo = ((lastVisitDate - Date.now()) / msToDays).toFixed(0);

    //If the user has visited less than a day ago dispaly message
    if (daysAgo < 1) {
        visitDateMsg.innerHTML = "Back so soon! Awsome!";
    }
    else {
        //If-Else statment to determine whether to add a "s" to the word "day" 
        if(daysAgo == 1) {
            visitDateMsg.innerHTML = "You last visited " + daysAgo + " day ago!";
        }
        else {
            visitDateMsg.innerHTML = "You last visited " + daysAgo + " days ago!";
        }
        
    }
}

//Update local storage on last visited date
localStorage.setItem("visitDate", Date.now());

//Debbugging line of code to force If-Else statments
//localStorage.setItem("visitDate", 1698765360023);