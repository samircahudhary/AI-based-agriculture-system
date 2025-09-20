// src/components/AirQuality.jsx
import React from "react";
import "../styles/AirQuality.css";

export default function AirQuality({ air }) {
  if (!air) return null;

  const aqi = air.list[0].main.aqi;
  const levels = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
  const color = ["#00e400", "#ffff00", "#ff7e00", "#ff0000", "#99004c"];

  return (
    <div className="air-quality" style={{ borderColor: color[aqi-1] }}>
      <h3>Air Quality Index</h3>
      <p>{levels[aqi-1]}</p>
    </div>
  );
}
