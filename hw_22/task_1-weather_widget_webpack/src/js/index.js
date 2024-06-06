// "use strict"

let BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "fbec1845f200ad90ac1dddeb10c7be7e";

const refs = {
    dateEl: document.getElementById("js--date"),
    timeEl: document.getElementById("js--time"),
    humidityEl: document.getElementById("js--humidity"),
    pressureEl: document.getElementById("js--pressure"),
    windEl: document.getElementById("js--wind"),
    weatherInfoEl: document.getElementById("js--weather-info"),
    cityEl: document.getElementById("js--city"),
    tempEl: document.getElementById("js--temperature"),
    tempFeelsEl: document.getElementById("js--temp-feels"),
    descriptionEl: document.getElementById("js--description"),
    dateTimeEl: document.getElementById("js--date-time"),
    buttonEl: document.getElementById("js--loading-button"),
    imageButtonEl: document.getElementById("button-img"),
}

const {
    dateEl,
    timeEl,
    humidityEl,
    pressureEl,
    windEl,
    weatherInfoEl,
    cityEl,
    tempEl,
    tempFeelsEl,
    descriptionEl,
    dateTimeEl,
    buttonEl,
    imageButtonEl,
} = refs;

createWeatherWidget();

function createWeatherWidget() {
    showCurrentDateAndTime();

    navigator.geolocation
        ? navigator.geolocation.getCurrentPosition(showSuccessPosition, showErrorPosition)
        : console.error("Geolocation не підтримується Вашим браузером");

    buttonEl.addEventListener("click", updateWeather);
}

function updateWeather(e) {
    e.preventDefault();

    imageButtonEl.classList.add("hidden");
    buttonEl.disabled = true;
    buttonEl.classList.add("button-loader");

    if (e.target.classList.contains("js--update-button")) {
        createWeatherWidget();
    }
}

function showCurrentDateAndTime() {
    showCurrentDate();
    showCurrentTime();

    setInterval(() => {
        showCurrentDate();
        showCurrentTime();
    }, 1000);
}

function showMonth(index) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[index];
}

function showDayOfWeek(index) {
    let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysOfWeek[index];
}

function showCurrentDate() {
    let month = showMonth(new Date().getMonth());
    let date = new Date().getDate();
    let year = new Date().getFullYear();
    let day = showDayOfWeek(new Date().getDay());
    dateEl.textContent = `${month} ${date}, ${year} - ${day}`;
}

function showCurrentTime() {
    let localTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    timeEl.textContent = `${localTime}`;
}

function showSuccessPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let URL = `${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    getWeather(URL);
}

function showErrorPosition() {
    console.error("Неможливо отримати Ваше місцезнаходження");
}

async function getWeather(url) {
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

function createWeatherIcon(iconId) {
    const image = document.createElement("img");
    let iconURL = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
    image.setAttribute("src", iconURL);
    image.setAttribute("alt", "weather-icon");
    image.setAttribute("class", "weather-image");
    image.setAttribute("id", "js--weather-icon");
    image.setAttribute("width", "400px");
    image.setAttribute("height", "400px");
    weatherInfoEl.insertAdjacentElement("afterbegin", image);
}

function textToUpperCase(text) {
    text = `${text[0].toUpperCase()}${text.slice(1)}`;
    return text;
}

function showWeatherUpdateTime() {
    let month = showMonth(new Date().getMonth());
    let date = new Date().getDate();
    let localTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

    dateTimeEl.textContent = `${month} ${date} ${localTime}`;
}