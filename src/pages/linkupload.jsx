import React from "react";
import "./linkupload.css";
import plantai from "../assets/plantai.mp4";
import soilai from "../assets/soilai.mp4";
import { useNavigate } from "react-router-dom";

export default function LinkUpload() {
  const navigate = useNavigate(); // ✅ Hook inside component

  const handleClick = () => {
    navigate("/upload"); // ✅ Correct redirection
  };

  return (
    <section className="linkupload">
      <div className="linkupload__cards-container">
        
        {/* Card 1 */}
        <div className="linkupload__card">
          <h2>🌱 Plant Disease Detection</h2>
          <p>
            Upload your plant leaf image and our AI system will analyze it to
            detect possible diseases. Get quick and reliable results to keep
            your crops healthy.
          </p>

          <video
            src={plantai}
            autoPlay
            loop
            muted
            playsInline
            className="card-video"
          />

          <button className="linkupload__btn" onClick={handleClick}>
            View Details
          </button>
        </div>

        {/* Card 2 */}
        <div className="linkupload__card">
          <h2>🌍 Soil & Climate Insights</h2>
          <p>
            Understand your soil conditions and discover which crops are best
            suited for your climate. Our IoT system helps farmers make
            data-driven decisions for better yield.
          </p>

          <video
            src={soilai}
            autoPlay
            loop
            muted
            playsInline
            className="card-video"
          />

          <button
            className="linkupload__btn"
            onClick={() => navigate("/soil")} // ✅ optional: another page
          >
            View Details
          </button>
        </div>
      </div>
    </section>
  );
}
