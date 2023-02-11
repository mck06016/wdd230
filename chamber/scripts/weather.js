async function getWeather() {
  fetch("http://api.weatherapi.com/v1/current.json?key=28b0266ce4074755b69224402231102&q=Chilliwack&aqi=no")
    .then(response => response.json())
    .then(data => {
      const temperature = data.current.temp_c;
      const temperatureElement = document.getElementById("temperature");
      temperatureElement.innerHTML = "Current Temperature: " + temperature + "°C";

      const windSpeed = data.current.wind_kph;
      const windSpeedElement = document.getElementById("ws");
      windSpeedElement.innerHTML = "Wind Speed: " + windSpeed + " kph";

      const windChill = data.current.feelslike_c;
      const windChillElement = document.getElementById("wc");
      if (windChill === 0 || windChill === "N/A") {
        windChillElement.innerHTML = "N/A";
      } else {
        windChillElement.innerHTML = "Wind Chill: " + windChill + "°C";
      }

      const wimage = document.getElementById("wimage");
      const witext = document.createElement("img");
      const widesc = document.createElement("p");
      witext.src = condition[1];
      console.log(wimage.src);
      witext.alt = "Current Weather Condition";
      widesc = condition[0];
      console.log(witext);
      wimage.appendChild(witext);
      wimage.appendChild(widesc);

    });
}

getWeather();