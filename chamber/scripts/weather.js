const url = "https://api.openweathermap.org/data/2.5/forecast?zip=76571,us&units=imperial&appid=407e6ab59006e88662f16686d1960fdf";

const currentIcon = document.querySelector("#weatherIcon");
const currentTemp = document.querySelector("#temp");
const currentDiscription = document.querySelector("#weatherDiscription");

const futureWeather = document.querySelector(".futureWeather");


async function getWeatherData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayCurrentWeather(data);
            displayFutureWeather(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayCurrentWeather(data) {
    const iconSrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    const iconAlt = data.list[0].weather[0].description;
    currentIcon.setAttribute("src", iconSrc);
    currentIcon.setAttribute("alt", iconAlt);

    currentTemp.innerHTML = `${data.list[0].main.temp}&#8457;`;
    currentDiscription.innerHTML = iconAlt.charAt(0).toUpperCase() + iconAlt.slice(1);
}

function displayFutureWeather(data) {
    let futureDays = [];

    for (let index = 1; index <= 4; index++) {
        futureDays.push(data.list[index * 8]);
    }
    //console.log(futureDays);

    futureDays.forEach((day) => {
        let weatherCard = document.createElement("section");
        let weekDay = document.createElement("h4");
        let weatherIcon = document.createElement("img");

        let maxTemp = document.createElement("p")
        let minTemp = document.createElement("p")

        let date = new Date(day.dt * 1000);
        let dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });

        weekDay.innerHTML = dayOfWeek;
        
        const imgSrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
        const imgAlt = day.weather[0].description;
        weatherIcon.setAttribute("src", imgSrc);
        weatherIcon.setAttribute("alt", imgAlt);

        maxTemp.innerHTML = `${day.main.temp_max.toFixed(0)}&#8457;`;
        minTemp.innerHTML = `${day.main.temp_min.toFixed(0)}&#8457;`;

        weatherCard.appendChild(weekDay);
        weatherCard.appendChild(weatherIcon);
        weatherCard.appendChild(maxTemp);
        weatherCard.appendChild(minTemp);

        futureWeather.appendChild(weatherCard);
    });
}

getWeatherData();