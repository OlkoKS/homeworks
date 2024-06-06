import {createWeatherWidget} from './index';

const refs = {
    dateEl: document.getElementById("js--date"),
    timeEl: document.getElementById("js--time"),
    weatherInfoEl: document.getElementById("js--weather-info"),
    dateTimeEl: document.getElementById("js--date-time"),
    imageButtonEl: document.getElementById("button-img"),
    buttonEl: document.getElementById("js--loading-button"),
}

const {
    dateEl,
    timeEl,
    weatherInfoEl,
    dateTimeEl,
    imageButtonEl,
    buttonEl,
} = refs;

export function showCurrentDateAndTime() {
    showCurrentDate();
    showCurrentTime();

    setInterval(() => {
        showCurrentDate();
        showCurrentTime();
    }, 1000);
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

export function createWeatherIcon(iconId) {
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

export function textToUpperCase(text) {
    text = `${text[0].toUpperCase()}${text.slice(1)}`;
    return text;
}

export function showWeatherUpdateTime() {
    let month = showMonth(new Date().getMonth());
    let date = new Date().getDate();
    let localTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

    dateTimeEl.textContent = `${month} ${date} ${localTime}`;
}

function showMonth(index) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[index];
}

function showDayOfWeek(index) {
    let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysOfWeek[index];
}

export function updateWeather(e) {
    e.preventDefault();

    imageButtonEl.classList.add("hidden");
    buttonEl.disabled = true;
    buttonEl.classList.add("button-loader");

    if (e.target.classList.contains("js--update-button")) {
        createWeatherWidget();
    }
}