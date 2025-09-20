import React, { useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

import weatherVideo from "../assets/weather.mp4";
import soil from "../assets/soil.jpg";
import me from "../assets/me.jpg";
import market from "../assets/market.mp4";
import alert from "../assets/alert.mp4";
import LinkUpload from "./linkupload";
export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);


const navigate = useNavigate();

const openWeatherPage = () => {
  navigate("/weather"); // navigate to WeatherPage
};
  
  return (
    <div className="dashboard">



      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2 className="logo">Farm.Ai</h2>
        <ul className="menu">
          <li className="menu-item active">🏠 Home</li>
          <li className="menu-item">📊 Analytics</li>
          <li className="menu-item">🌾 Crops</li>
          <li className="menu-item">💧 Irrigation</li>
          <li className="menu-item">⚙️ Settings</li>
        </ul>
      </aside>



      {/* Main Content */}
      <main className="main-content">
        {/* Top Navbar */}
        <header className="topbar">
          {/* Hamburger button (only visible on small screens) */}
          <div
            className={`hamburger ${sidebarOpen ? "active" : ""}`}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <h2 className="farmheading">Farm.AI – Smart Agriculture Assistant for Farmers</h2>
          <div className="user-info">
            <span className="user-name">Samir Chaudhary</span>
            <img
              src={me}
              alt="user avatar"
              className="avatar"
            />
          </div>
        </header>


  <section className="dashboard__section">
          <LinkUpload />
        </section>

        {/* Dashboard Content */}
        <section className="cards">


            
          <div className="card"  onClick={openWeatherPage} style={{ cursor: "pointer" }}>
            <h4>Weather</h4>
  <video
        src={weatherVideo}
        autoPlay
        loop
        muted
        playsInline
        className="card-video"
      />

            <p>🌾 Farmer: “How do I know which crop to plant this season?” <br />

🌤️ Weather Expert: “Check the weather patterns—temperature, rainfall, and humidity—to plan crops for the best yield.”</p>
          </div>
          <div className="card">
            <h4>Soil Health</h4>
            <img src={soil}alt="soil" className="card-video" />
            <p>✅ Optimal moisture level</p>
          </div>
          <div className="card">
          
            <h4>Market Price</h4>
             <video
        src={market}
        autoPlay
        loop
        muted
        playsInline
        className="card-video"
      />
            <p>🌾 Wheat: ₹2100/qtl</p>
          </div>
          <div className="card">
            <h4>Alerts</h4>
             <video
        src={alert}
        autoPlay
        loop
        muted
        playsInline
        className="card-video"
        />
            <p>🚨 Pest risk detected in Maize</p>
          </div>
        </section>
      </main>
    </div>
  );
}
