import React, { useEffect, useState } from 'react';

const Weather = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('Delhi');
  const [displayCity, setDisplayCity] = useState('Delhi');
  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=xxxxxxxxxx`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setDisplayCity(city);
        setData(jsonData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, []);
  return (
    <div>
      Weather
      <div className="weather-card">
        {data && data.cod == 200 ? (
          <div className="weather-info">
            <h3>📍 {displayCity}</h3>

            <h1 id="temp">{(data.main.temp - 273.15).toPrecision(2)}° C</h1>
            <h3 id="weather-in-words">{data.weather[0].main}</h3>

            <h3>wind : {(data.wind.speed * 3.6).toPrecision(3)} km/h</h3>
            <h3>humidity : {data.main.humidity} %</h3>
          </div>
        ) : (
          <div> City not found</div>
        )}

        <div className="search-city">
          <input
            type="text"
            placeholder="enter city name"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          
          <button
            onClick={() => {
              setData(null);
              fetchWeather();
            }}
          >
            Set City
          </button>
        </div>
      </div>
    </div>
  );
};

export default Weather;
