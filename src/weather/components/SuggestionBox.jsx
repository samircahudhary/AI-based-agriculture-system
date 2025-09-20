// src/components/Suggestions.jsx
import React from "react";
import "../styles/SuggestionBox.css";

export default function Suggestions({ weather, air }) {
  if (!weather) return null;

  let tips = [];

  // Weather suggestions
  const condition = weather.weather[0].main.toLowerCase();
  if (condition.includes("rain")) tips.push("☔ Carry an umbrella");
  if (condition.includes("clear")) tips.push("😎 Wear sunglasses / sunscreen");
  if (weather.main.temp < 10) tips.push("🧥 Dress warmly");
  if (weather.main.temp > 30) tips.push("💧 Stay hydrated");

  // Air Quality suggestions
  if (air) {
    const aqi = air.list[0].main.aqi;
    if (aqi >= 4) tips.push("😷 Wear a mask outdoors");
    if (aqi === 5) tips.push("🚫 Avoid outdoor exercise");
  }

  return (
    <div className="suggestions">
      <h3>Suggestions</h3>
      <ul>
        {tips.length > 0 ? (
          tips.map((t, i) => <li key={i}>{t}</li>)
        ) : (
          <li>Enjoy your day 🌍</li>
        )}
      </ul>
    </div>
  );
}
