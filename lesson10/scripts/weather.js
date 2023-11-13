const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat={49.75}&lon={6.64}&units=imperial&appid={21a3313f9a9f14adccefb2f843027eb5}";


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


apiFetch();
