// src/components/WeatherCard.jsx
import React from "react";
import "../styles/WeatherCard.css";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <div className="weather-main">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
        <div className="temp">
          {Math.round(weather.main.temp)}°C
        </div>
      </div>
      <p>{weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}
