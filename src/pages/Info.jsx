import React from "react";
import { useLocation,useNavigate } from "react-router-dom";

import "./Info.css";

export default function Info() {
  const location = useLocation();
  const myInfo = location.state || {};
  const navigate = useNavigate(); 
  
const handleClick = () => {
    navigate("/dashboard"); // redirects to dashboard
  };
  return (
    <div className="info-page">
      <h2 className="info-title">AI-Powered IoT Smart Agriculture System</h2>

      <div className="info-boxes " onClick={handleClick}>
        {/* Box 1 - Personal Info */}
        <div className="info-card">
         <h3>  Executive Summary</h3>
The AI-Powered IoT Smart Agriculture System is an integrated solution designed to modernize farming and gardening. <br /> <br />
 It addresses common challenges such as identifying plant diseases,<br />
  understanding soil health, and selecting the right crops for a specific environment. <br /> <br />
   By combining real-time data from IoT sensors with powerful AI analysis, this system provides actionable insights to farmers and gardeners, helping to increase crop yield, reduce resource waste, and promote sustainable practices. <br /> <br />
    The system monitors soil and environmental conditions, uses AI to detect diseases from images, and recommends suitable plants based on local climate and soil quality.
        </div>

        {/* Box 2 - Paragraph / About */}
        <div className="info-card">
        
          <p>
           🌱 IoT Soil Device: Sensors in the soil track moisture, nutrients (NPK), and pH in real-time.
<br />
📷 Smart Camera: Captures plant images to monitor growth and spot problems.
<br />

📊 User Dashboard: Farmers see easy-to-read insights on phone or computer.
<br />
💧 Soil Health Check: Suggests when to water and what fertilizer to add.
<br />
🦠 Disease Detection: Identifies plant diseases from photos and gives cures.
<br />
🌍 Smart Crop Suggestions: Recommends plants best suited for your soil and climate.
<br />
🔔 Instant Alerts: Sends notifications for urgent actions like watering or pest control.
<br />

🌾 Farmer-Friendly: Turns complex data into simple, actionable advice.
          </p>
          
        </div>
      </div>
    </div>
  );
}
