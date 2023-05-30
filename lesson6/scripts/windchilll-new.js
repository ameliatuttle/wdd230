function windchill(windspeed, temperature){
    // get the html element to update
    const temperatureElt = document.querySelector("#temperature");
    const windspeedElt = document.querySelector("#windspeed");
    const windchillElt = document.querySelector("#windchill");

    // calculate the windchill if applicable
    let windchillMsg = "N/A";

    if (windspeed >= 3.0 && temperature <= 50){
        let chillfactor = Math.pow(windspeed, 0.16);
        let windchillamt = Math.round(35.74 + (0.6215 * temperature) - (35.75 * chillfactor) + (0.4275 * temperature * chillfactor));
        windchillMsg = `${windchillamt}`;
    }

    // update the html elements with values
    temperatureElt.textContent = temperature;
    windspeedElt.textContent = windspeed;
    windchillElt.textContent = windchillMsg;
}

// call the windchill function with placeholder values
windchill(5,5)