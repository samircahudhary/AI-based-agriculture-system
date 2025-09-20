// src/weather/components/CropSuggestionBox.jsx
import React from "react";
import { getCropSuggestion } from "../api/weatherApi";
import "../styles/CropSuggestionBox.css";

export default function CropSuggestionBox({ weather, air }) {
  const suggestion = getCropSuggestion(weather, air);

  return (
    <div className="suggestions">
      <h3>Crop Suggestions</h3>
      <p>{suggestion}</p>
    </div>
  );
}
