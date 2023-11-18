
userTemp = 43.5;
userWind = 12.2;

const windInfo = document.querySelector(".windChillInfo");

const temperature = document.querySelector(".temp");

const windSpeed = document.querySelector(".windSpeed");

if (userTemp <= 50 & userWind > 3) {
    temperature.innerHTML = "Temperature: <br>" + userTemp;
    windSpeed.innerHTML = "Wind Speed: <br>" + userWind;
    windInfo.innerHTML = calculateWindChill(userTemp, userWind);
}
else {
    windInfo.innerHTML = "Wind Chill: <br> N/A";
}

function calculateWindChill(airTemp, windSpeed) {

    windchill = 35.74 + (0.6215 * airTemp) - (35.57 * (windSpeed ** 0.16)) + 0.4275 * (airTemp * (windSpeed ** 0.16));

    return "The wind chill is: <br>" + windchill.toFixed(2) + "&#8457";
}