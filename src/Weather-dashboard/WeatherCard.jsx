import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData || !weatherData.weather) {
    return <p>Loading...</p>;
  }

  const { name, weather, main, wind } = weatherData;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{weather[0]?.description || 'No description available'}</p>
      <p className='temp'>Temperature: {main?.temp || 'N/A'}°C</p>
      <p>Humidity: {main?.humidity || 'N/A'}%</p>
      <p>Wind Speed: {wind?.speed || 'N/A'} m/s</p>
    </div>
  );
};

export default WeatherCard;
