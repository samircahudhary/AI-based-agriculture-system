import React, { useState } from "react";
import SearchBar from "./weather/components/SearchBar";
import WeatherCard from "./weather/components/WeatherCard";
import PredictionBox from "./weather/components/PredictionBox";
import SuggestionBox from "./weather/components/SuggestionBox";
import Forecast from "./weather/components/Forecast";
import AirQuality from "./weather/components/AirQuality";
import CropSuggestionBox from "./weather/components/CropSuggestionBox";
import { fetchWeather, fetchForecast, fetchAirQuality } from "./weather/api/weatherApi";
import "./weather/styles/WeatherHome.css";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [air, setAir] = useState(null);

  const handleSearch = async (city) => {
    const data = await fetchWeather(city);
    setWeather(data);

    if (data) {
      const fc = await fetchForecast(city);
      setForecast(fc);

      const aq = await fetchAirQuality(data.coord.lat, data.coord.lon);
      setAir(aq);
    }
  };

  return (
    <div className="home">
      <h1 >🌤️ React Weather & Crop App </h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherCard weather={weather} />
      <Forecast forecast={forecast} />
      <AirQuality air={air} />
      <PredictionBox weather={weather} />
      <SuggestionBox weather={weather} air={air} />
      <CropSuggestionBox weather={weather} air={air} /> {/* New crop suggestion */}
    </div>
  );
}
