const url = "https://api.openweathermap.org/data/2.5/forecast?q=Cozumel,Mx&units=imperial&appid=407e6ab59006e88662f16686d1960fdf";

async function getWeatherData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayCurrentWeather(data);
            displayFutureWeather(data)
        }   
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


const currentIcon = document.querySelector("#currentImg");
const currentDiscription = document.querySelector("#currentDiscription");

const currentTemp = document.querySelector("#currentTemp");
const currentHumidity = document.querySelector("#currentHumidity");

function displayCurrentWeather(data) {
    const iconSrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    const iconAlt = data.list[0].weather[0].description;

    currentIcon.setAttribute("src", iconSrc);
    currentIcon.setAttribute("alt", iconAlt);
    currentDiscription.innerHTML = iconAlt.charAt(0).toUpperCase() + iconAlt.slice(1);

    currentTemp.innerHTML = `Temp: ${data.list[0].main.temp}&#8457;`;
    currentHumidity.innerHTML = `Humidity: ${data.list[0].main.humidity}%`;
}



const weekDay = document.querySelector("#weekday");

const weatherImg = document.querySelector("#weatherImg");
const description = document.querySelector("#weatherDiscription")

const maxTemp = document.querySelector("#maxTemp");
const minTemp = document.querySelector("#minTemp");
const humidity = document.querySelector("#humidity");

function displayFutureWeather(data) {
    const imgSrc = `https://openweathermap.org/img/w/${data.list[9].weather[0].icon}.png`;
    const imgAlt = data.list[9].weather[0].description;
    weatherImg.setAttribute("src", imgSrc);
    weatherImg.setAttribute("alt", imgAlt);
    description.innerHTML = imgAlt.charAt(0).toUpperCase() + imgAlt.slice(1);

    maxTemp.innerHTML = `Max Temp: <br>${data.list[9].main.temp_max}&#8457;`;
    minTemp.innerHTML = `Min Temp: <br>${data.list[9].main.temp_min}&#8457;`;
    humidity.innerHTML = `Humidity: ${data.list[9].main.humidity}%`;
}

getWeatherData();