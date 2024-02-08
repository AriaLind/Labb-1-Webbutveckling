const url =
  "https://api.open-meteo.com/v1/forecast?latitude=57.67895140893345&longitude=12.001538877912802&current=temperature_2m,apparent_temperature,rain,snowfall,wind_speed_10m&wind_speed_unit=ms&timezone=auto";

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Response not OK.");
  })
  .then((data) => {
    console.log(data);

    weather = document.getElementById('weather');

    const temperature = data.current.temperature_2m;
    const rain = data.current.rain;
    const windspeed = data.current.wind_speed_10m;
    const snow = data.current.snowfall;

    const temperatureElement = document.createElement('p');
    const windspeedElement = document.createElement('p');
    const rainElement = document.createElement('p');
    const snowElement = document.createElement('p');

    temperatureElement.classList.add('text-center');
    windspeedElement.classList.add('text-center');
    rainElement.classList.add('text-center');
    snowElement.classList.add('text-center');

    temperatureElement.textContent = `Current Temperature: ${temperature} ${data.current_units.temperature_2m}`;
    windspeedElement.textContent = `Wind speed: ${windspeed} ${data.current_units.wind_speed_10m}`;
    rainElement.textContent = `Rain: ${rain} ${data.current_units.rain}`
    snowElement.textContent = `Snowfall: ${snow} ${data.current_units.snowfall}`

    weather.appendChild(temperatureElement);
    weather.appendChild(windspeedElement);
    weather.appendChild(rainElement);
    weather.appendChild(snowElement);
    
  })
  .catch((error) => {
    console.error("There was a problem.", error);
  });
