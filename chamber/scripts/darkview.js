const darkButton = document.querySelector("#darkview");

const body = document.querySelector("body");

const events = document.querySelector(".events");

const eventCard = document.querySelectorAll(".eventCard")

const spotlights = document.querySelector(".spotlights");

const employeeSpotlight = document.querySelector(".employeeSpotlight");

const heading = document.querySelectorAll(".heading");

darkButton.addEventListener("click", () => {
    if (darkButton.textContent == "🕶️") {
        body.style.background = "#000";
        
        events.style.background = "#90ADC6";
        eventCard[0].style.background = "#fff";
        eventCard[1].style.background = "#fff";
        spotlights.style.background = "#90ADC6";
        employeeSpotlight.style.background = "#90ADC6";

        for (let i = 0; i < heading.length; i++) {
            heading[i].style.background = "#333652";
            heading[i].style.color = "#fff";
        }
        
        darkButton.textContent = "🔆";
    }
    else {
        body.style.background = "#dcdcdc";
        
        events.style.background = "#E9EAEC";
        eventCard[0].style.background = "#90ADC6";
        eventCard[1].style.background = "#90ADC6";
        spotlights.style.background = "#E9EAEC";
        employeeSpotlight.style.background = "#E9EAEC";

        for (let i = 0; i < heading.length; i++) {
            heading[i].style.background = "#90ADC6";
            heading[i].style.color = "#000";
        }
        
        heading[1].style.background = "#333652";
        heading[1].style.color = "#fff";

        heading[2].style.background = "#333652";
        heading[2].style.color = "#fff";
        
        darkButton.textContent = "🕶️";
    }
})