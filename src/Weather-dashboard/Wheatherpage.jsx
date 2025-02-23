import React, { useState, useEffect } from 'react';
import WeatherSearch from './WeatherSearch';
import WeatherCard from './WeatherCard';
import WeatherForecast from './WeatherForecast';

function Weatherpage() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (city) {
      setLoading(true);
      fetchWeather(city);
    }
  }, [city]);

  const fetchWeather = async (city) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=31632b9a481a05326db7d4809e2c3406&units=metric`);
      const data = await res.json();
      setWeatherData(data);
      fetchForecast(city);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setLoading(false);
    }
  };

  const fetchForecast = async (city) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=31632b9a481a05326db7d4809e2c3406&units=metric`);
      const data = await res.json();
      setForecastData(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching forecast data:", err);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <WeatherSearch setCity={setCity} />
      {loading ? (
        <p className='loading'>Loading...</p>
      ) : (
        <>
          {weatherData && <WeatherCard weatherData={weatherData} />}
          {forecastData && <WeatherForecast forecastData={forecastData} />}
        </>
      )}
    </div>
  );
}

export default Weatherpage;
