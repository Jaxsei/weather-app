const apiKey = "bc9c852f44ab4ff98ee235609241308";                                                              
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=germany`;

async function checkWeather() {
  const response = await fetch(apiUrl);
  var data = await response.json();
  console.log(data);
 document.querySelector(".city").innerHTML = data.location.country;
 document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°c";
 document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
 document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";
}

checkWeather();
