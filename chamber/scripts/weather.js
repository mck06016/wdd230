const apiKey = 'ebcbe247130222ab1957eddde562daa6';
const latitude = 49.157940;
const longitude = -121.951469;


function fetchChill(temp, speed) {
  const f = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16
  if (temp <= 50 && speed > 3) {
    windchill = f.toFixed(1) + "°F";
  } else {
    windchill = "NA";
  }

  return windchill;
}


function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;


  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayWeatherData(data);
    })
    .catch(error => {
      console.error('Issue:', error);
    });
}

function displayWeatherData(data) {
  const weatherInfoElement = document.getElementById('weather-info');

  const cityName = data.name;
  const temperatureFahrenheit = data.main.temp;
  const weatherIcon = data.weather[0].icon;
  const windspeed = data.wind.speed;
  const description = data.weather[0].description;
  //capitalize each description word
  const words = description.split(" ");
  const capitalizedWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  const capitalizedDescription = capitalizedWords.join(" ");

  fetchChill(temperatureFahrenheit, windspeed);

  const htmlContent = `
    <span class="weather-headline">${city} Weather</span>
    <img class="weather-img" alt="Weather icon" src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png">
    <span class="weather-temp">${temperatureFahrenheit.toFixed(1)}°F</span>
    <span class="weather-description">${capitalizedDescription}</span>
    <hr class="weather-description">
    <span class="weather-speed"><strong>Wind Speed:</strong> ${windspeed} mph</span>
    <span class="weather-chill"><strong>Wind chill:</strong> ${windchill}
    <p class="small">Courtesy of: <a class="small" href="https://OpenWeatherMap.org">OpenWeatherMap.org</a></p></span>
  `;

  weatherInfoElement.innerHTML = htmlContent;
}

const city = 'Chilliwack';
fetchWeatherData(city);