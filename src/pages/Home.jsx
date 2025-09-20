import React, { useState } from "react";
import { getWeatherData } from "../weather/api/weatherApi";
 // ✅ correct path
// Home.jsx
import AirQuality from "../weather/Weathercomponent/AirQuality";
import SearchBar from "../weather/Weathercomponent/SearchBar";
import CurrentWeather from "../weather/Weathercomponent/CurrentWeather";
import Forecast from "../weather/Weathercomponent/Forecast";
import UnitToggle from "../weather/Weathercomponent/UnitToggle";

import "./Home.css";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [air, setAir] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const w = await fetchWeather(city, unit);
      setWeather(w);

      const f = await fetchForecast(city, unit);
      setForecast(f);

      const a = await fetchAirQuality(w.coord.lat, w.coord.lon);
      setAir(a);
    } catch (err) {
      setError("City not found!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Weather App</h1>
        <div className="header-controls">
          <SearchBar onSearch={handleSearch} />
          <UnitToggle unit={unit} setUnit={setUnit} />
        </div>
      </header>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      <CurrentWeather data={weather} />
      <Forecast data={forecast} />
      <AirQuality data={air} />
    </div>
  );
}
