"use strict"

import "../scss/index.scss";
import {getWeather} from "./api";
import {showCurrentDateAndTime, updateWeather} from './helpers';

let BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "fbec1845f200ad90ac1dddeb10c7be7e";

const buttonEl = document.getElementById("js--loading-button");

createWeatherWidget();

export function createWeatherWidget() {
    showCurrentDateAndTime();

    navigator.geolocation ? navigator.geolocation.getCurrentPosition(showSuccessPosition, showErrorPosition) : console.error("Geolocation не підтримується Вашим браузером");

    buttonEl.addEventListener("click", updateWeather);
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
