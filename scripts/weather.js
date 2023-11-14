const url = "https://api.openweathermap.org/data/2.5/weather?zip=76571&appid=407e6ab59006e88662f16686d1960fdf&units=imperial";

const icon = document.querySelector("#weatherIcon");
const temp = document.querySelector("#currentTemp");
const weatherCondition = document.querySelector("#weatherCondition");

async function fetchAPI() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        }   
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayWeather(data) {
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const iconAlt = data.weather[0].description
    icon.setAttribute("src", iconSrc);
    icon.setAttribute("alt", iconAlt);
    currentTemp.innerHTML = `${data.main.temp}&#8457;`;
    weatherCondition.textContent = iconAlt.charAt(0).toUpperCase() + iconAlt.slice(1);;
}


fetchAPI();