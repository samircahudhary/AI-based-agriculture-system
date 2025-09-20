// src/components/Forecast.jsx
import React from "react";
import "../styles/Forecast.css";

export default function Forecast({ forecast }) {
  if (!forecast) return null;

  // Take next 5 periods (3-hour forecast)
  const next5 = forecast.list.slice(0, 5);

  return (
    <div className="forecast">
      <h3>Forecast</h3>
      <div className="forecast-grid">
        {next5.map((item, index) => (
          <div key={index} className="forecast-card">
            <p>{new Date(item.dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="icon"
            />
            <p>{Math.round(item.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}
