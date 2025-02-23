import React from 'react';

const WeatherForecast = ({ forecastData }) => {
  return (
    <div className="weather-forecast">

      <h3>5-Day Forecast</h3>

      <div className="forecast-cards">

    
          {forecastData?.list?.slice(0, 5).map((forecast, index) => {
          const { dt_txt, main, weather } = forecast;

          return (

         
            <div key={index} className="forecast-card">
              <p>{new Date(dt_txt).toLocaleDateString()}</p>
              <p>{weather[0]?.description || 'No description available'}</p>
              <p className='forecast-temp'>Temp: {main?.temp || 'N/A'}°C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherForecast;
