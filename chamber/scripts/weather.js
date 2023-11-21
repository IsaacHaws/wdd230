const url = "https://api.openweathermap.org/data/2.5/forecast?zip=76571,us&units=imperial&cnt=6&appid=407e6ab59006e88662f16686d1960fdf";

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
    const iconSrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    const iconAlt = data.list[0].weather[0].description;
    currentIcon.setAttribute("src", iconSrc);
    currentIcon.setAttribute("alt", iconAlt);

    currentTemp.innerHTML = `${data.list[0].main.temp}&#8457;`;
    currentDiscription.innerHTML = iconAlt.charAt(0).toUpperCase() + iconAlt.slice(1);

    data.list.forEach((event) => {
        let weatherCard = document.createElement("section");
        let weekDay = document.createElement("h4");
        let weatherIcon = document.createElement("img");

        let maxTemp = document.createElement("p")
        let minTemp = document.createElement("p")

        let timeStamp = event.dt_txt;
        let dayOfWeek = new Date(timeStamp).getDay()

        switch (dayOfWeek) {
            case 0:
                dayOfWeek = "Sun";
                break;

            case 1:
                dayOfWeek = "Mon";
                break;
            
            case 2:
                dayOfWeek = "Tues";
                break;
            
            case 3: 
                dayOfWeek = "Wed";
                break;

            case 4: 
                dayOfWeek = "Thurs";
                break;

            case 5: 
                dayOfWeek = "Fri";
                break;

            case 6:
                dayOfWeek = "Sat";
        
            default:
                break;
        }
        weekDay.innerHTML = dayOfWeek;
        
        const imgSrc = `https://openweathermap.org/img/w/${event.weather[0].icon}.png`;
        const imgAlt = event.weather[0].description;
        weatherIcon.setAttribute("src", imgSrc);
        weatherIcon.setAttribute("alt", imgAlt);

        maxTemp.innerHTML = `${event.main.temp_max.toFixed(0)}&#8457;`;
        minTemp.innerHTML = `${event.main.temp_min.toFixed(0)}&#8457;`;

        weatherCard.appendChild(weekDay);
        weatherCard.appendChild(weatherIcon);
        weatherCard.appendChild(maxTemp);
        weatherCard.appendChild(minTemp);

        futureWeather.appendChild(weatherCard);
    });
}

getWeatherData();