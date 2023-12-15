const apiKey = 'fb7fe86696afb3e5b9042eb06614bb6e';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;
    if (!cityName) {
        alert('Please enter a city name.');
        return;
    }

const url = `${apiUrl}?q=${cityName}&appid=${apiKey}`;

try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
        displayWeather(data);
    }
    else {
        alert(`Error: ${data.message}`);
    }
} catch (error) {
    alert('An error occurred while fetching weather data.');
    console.error(error);
}
};
function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');

    const temperatureHigh = (data.main.temp_max - 273.15) * 9 / 5 + 32;
    const temperatureLow = (data.main.temp_min - 273.15) * 9 / 5 + 32;
    const forecast = data.weather[0].description;
    const humidity = data.main.humidity;
    const weatherHTML = `
    <p>High: ${temperatureHigh.toFixed(2)}°F</p>
    <p>Low: ${temperatureLow.toFixed(2)}°F</p>
    <p>Forecast: ${forecast}</p>
    <p>Humidity: ${humidity}%</p>
  `;

    weatherInfo.innerHTML = weatherHTML;
}