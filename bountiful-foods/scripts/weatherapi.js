// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentHum = document.querySelector('#current-hum');

const lat = 33.158092;
const lon = -117.350594;
const appid = "be32833d7239c63fb1ec02ebf74bf9fc";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=imperial`

function displayResults(weatherData) {

    // toFixed(0) rounds the temperature to the nearest whole number
  
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    // const temp =   weatherData.main.temp.toFixed(0)
    // const windspeed = weatherData.wind.speed.toFixed(0)
    // getWindChill(temp, windspeed)
    currentHum.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`
  }

async function getWeather() {
    try {
      const response = await fetch(weatherURL);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  getWeather();