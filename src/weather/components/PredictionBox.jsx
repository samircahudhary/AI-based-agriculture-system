// src/components/PredictionBox.jsx
import React from "react";
import "../styles/PredictionBox.css";

export default function PredictionBox({ weather }) {
  if (!weather) return null;

  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString();

  return (
    <div className="prediction-box">
      <h3>Extra Details</h3>
      <div className="pred-grid">
        <div><strong>Feels Like:</strong> {Math.round(weather.main.feels_like)}°C</div>
        <div><strong>Pressure:</strong> {weather.main.pressure} hPa</div>
        <div><strong>Visibility:</strong> {weather.visibility / 1000} km</div>
        <div><strong>Sunrise:</strong> {sunrise}</div>
        <div><strong>Sunset:</strong> {sunset}</div>
      </div>
    </div>
  );
}
