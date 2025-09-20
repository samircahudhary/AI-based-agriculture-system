// src/weather/api/weatherApi.js
import axios from "axios";

const API_KEY = import.meta.env.VITE_OWM_KEY;// OpenWeatherMap API key

// Fetch current weather
export async function fetchWeather(city) {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return res.data;
}

// Fetch 5-day forecast
export async function fetchForecast(city) {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  return res.data;
}

// Fetch air quality
export async function fetchAirQuality(lat, lon) {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  return res.data;
}

// Simple crop suggestion based on temp and AQI
export function getCropSuggestion(weather, air) {
  if (!weather) return "Data unavailable";

  const temp = weather.main.temp;
  const aqi = air ? air.list[0].main.aqi : 1; // default good AQI

  // Crop Suggestion Logic based on Temperature (°C) and Air Quality Index (AQI)

function suggestCrop(temp, aqi) {
  // Poor air quality check first
  if (aqi > 3) 
    return "⚠️ Air quality poor, avoid planting sensitive crops or use greenhouse cultivation";

  // 1️⃣ Very Hot (35°C - 40°C)
  // Suitable for heat-tolerant crops
  if (temp > 35 && temp <= 40) 
    return "🌽 Suitable for Sorghum, Pearl Millet, Cotton"; 

  // 2️⃣ High Temperature (30°C - 35°C)
  // Tropical crops thrive in warm, humid weather
  if (temp >= 30 && temp <= 35) 
    return "🌾 Suitable for Rice, Maize, Sugarcane"; 

  // 3️⃣ Warm (25°C - 30°C)
  // Good for both cereals and legumes
  if (temp >= 25 && temp < 30) 
    return "🥜 Suitable for Groundnut, Soybean, Maize"; 

  // 4️⃣ Moderate (20°C - 25°C)
  // Ideal for cool-season cereals and some vegetables
  if (temp >= 20 && temp < 25) 
    return "🌱 Suitable for Wheat, Barley, Chickpea, Lentil"; 

  // 5️⃣ Cool (15°C - 20°C)
  // Leafy vegetables and root crops
  if (temp >= 15 && temp < 20) 
    return "🥦 Suitable for Cabbage, Spinach, Lettuce, Carrot"; 

  // 6️⃣ Cold (< 15°C)
  // Cold-tolerant vegetables
  if (temp < 15) 
    return "🥬 Suitable for Broccoli, Cauliflower, Peas"; 

  // Default suggestion if no conditions match
  return "🌾 Check local climate and soil conditions for optimal crops";
}


  return "🌻 Consider hardy crops like Millets or Sorghum";
}
