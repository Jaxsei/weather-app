const apiKey = "e7791e5b0e254387c18292cd4893a633";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const weatherCondition = data.weather[0].main.toLowerCase();

    // Set the weather icon based on the weather condition using if-else
    if (data.main.temp <= 0) {
        weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main.toLowerCase() === "clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main.toLowerCase() === "clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main.toLowerCase() === "rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main.toLowerCase() === "drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main.toLowerCase() === "snow") {
        weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main.toLowerCase() === "wind") {
        weatherIcon.src = "images/wind.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});