// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#icon-descrit');

// Rexberg Lat and long
const lat = "43.82";
const lon = "-111.79";

// My API key
const apiKey = "c666f94d8b574941793ed9ae7f9c35f7";

// API call
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
// const url = "https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&appid=c666f94d8b574941793ed9ae7f9c35f7"

async function getWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}



function displayResults(weatherData) {
    // toFixed(0) rounds the temperature to the nearest whole number
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    console.log(currentTemp.innerHTML)

    // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    

    const temp = weatherData.main.temp.toFixed(0);
    const windspeed = weatherData.wind.speed.toFixed(0);

    // Include the JS file before this file call to get this func
    windchill(temp, windspeed);
}


getWeather();