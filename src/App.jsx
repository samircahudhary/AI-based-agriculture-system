import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherHome from "./WeatherHome";
import FirstPage from "./pages/Firstpage";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Info from "./pages/Info";
import LinkUpload from "./pages/linkupload"



import ImageCapture from "./components/ImageCapture";
import SimilarImages from "./components/SimilarImages";
import ImageDetail from "./components/ImageDetail";

import "./App.css";

function App() {
  const [similarImages, setSimilarImages] = useState([]);
  const [selectedDetail, setSelectedDetail] = useState(null);

  // Handle when AI returns predictions
  const handleImageUpload = (data) => {
    if (data.similar_images) {
      setSimilarImages(data.similar_images);
    }
    setSelectedDetail(null);
  };

  // Handle click on an image to view detail (fetch by name)
  const handleImageClick = async (name) => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/image-detail/${encodeURIComponent(name)}`
      );
      const detail = await res.json();
      setSelectedDetail(detail);
    } catch (err) {
      console.error("Error fetching detail:", err);
    }
  };

  return (
    <Router>
      <Routes>
        {/* Your existing routes */}
        <Route path="/" element={<FirstPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/info" element={<Info />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/linkupload" element={<LinkUpload />} />
<Route path="/weather" element={<WeatherHome />} />


       

        {/* Plant health AI route */}
        <Route
          path="/upload"
          element={
            <div className="app-container">
              <h1 className="app-title">🌱 Plant Health Identifier</h1>
              <ImageCapture onPlantSelect={handleImageUpload} />
              <SimilarImages
                images={similarImages}
                onImageClick={handleImageClick}
              />
              <ImageDetail detail={selectedDetail} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
