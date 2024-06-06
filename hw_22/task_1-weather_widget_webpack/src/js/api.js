import {createWeatherIcon, textToUpperCase, showWeatherUpdateTime} from "./helpers";

const refs = {
    humidityEl: document.getElementById("js--humidity"),
    pressureEl: document.getElementById("js--pressure"),
    windEl: document.getElementById("js--wind"),
    cityEl: document.getElementById("js--city"),
    tempEl: document.getElementById("js--temperature"),
    tempFeelsEl: document.getElementById("js--temp-feels"),
    descriptionEl: document.getElementById("js--description"),
    imageButtonEl: document.getElementById("button-img"),
    buttonEl: document.getElementById("js--loading-button"),
}

const {
    humidityEl,
    pressureEl,
    windEl,
    cityEl,
    tempEl,
    tempFeelsEl,
    descriptionEl,
    imageButtonEl,
    buttonEl,
} = refs;

export async function getWeather(url) {
    try {
        let response = await fetch(url);

        if (response.status === 200) {
            let weatherData = await response.json();
            showWeatherData(weatherData);
        } else {
            console.log("ERROR");
        }
    } catch (error) {
        console.log(error);
    }
}

function showWeatherData(data) {
    buttonEl.disabled = false;
    buttonEl.classList.remove("button-loader");
    imageButtonEl.classList.remove("hidden");

    humidityEl.textContent = `Humidity: ${data.main.humidity}%`;
    pressureEl.textContent = `Pressure: ${data.main.pressure} hPa`;
    windEl.textContent = `Wind: ${data.wind.speed} m/s`;

    const imageEl = document.getElementById("js--weather-icon");
    if (imageEl) {
        imageEl.remove();
        createWeatherIcon(data.weather[0].icon);
    } else {
        createWeatherIcon(data.weather[0].icon);
    }

    cityEl.textContent = `${data.name}`;
    tempEl.textContent = `${Math.round(data.main.temp)} °C`;
    tempFeelsEl.textContent = `Feels Like: ${Math.round(data.main.feels_like)} °C`;
    descriptionEl.textContent = `${textToUpperCase(data.weather[0].description)}`;

    showWeatherUpdateTime();
    buttonEl.classList.remove("hidden");
}