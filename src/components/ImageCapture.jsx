import React, { useState } from "react";
import axios from "axios";
import "../components/ImageCapture.css";

export default function ImageCapture({ onPlantSelect }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState(null);

  // extra details
  const [category, setCategory] = useState("");
  const [state, setState] = useState("");
  const [plantName, setPlantName] = useState("");
  const [symptoms, setSymptoms] = useState(""); // optional now ✅

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select an image first!");
    if (!category || !state) return alert("Please fill in category and state!");
    if (!plantName) return alert("Please enter Plant / Fruit Name!"); // required ✅

    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);
    formData.append("state", state);
    formData.append("plantName", plantName);
    formData.append("symptoms", symptoms); // optional

    try {
      const res = await axios.post("http://127.0.0.1:8000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Prediction response:", res.data);
      setPrediction(res.data);

      if (onPlantSelect) {
        onPlantSelect(res.data);
      }
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  return (
    <div className="image-capture">
      <h2>Upload Plant Image</h2>

      {/* Select details */}
      <div className="form-section">
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="plant">Plant</option>
          <option value="tree">Tree</option>
          <option value="flower">Flower</option>
          <option value="fruit">Fruit</option>
        </select>
      </div>

      <div className="form-section">
        <label>State:</label>
        
        <input
          type="text"
          placeholder="Enter your state (e.g., Maharashtra)"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>

      <div className="form-section">
        <label>Plant / Fruit Name (required):</label>
         
        <input
          type="text"
          placeholder="e.g., Mango, Rose"
          value={plantName}
          onChange={(e) => setPlantName(e.target.value)}
        />
      </div>

      <div className="form-section">
        <label>Symptoms (optional):</label>
        <textarea
          placeholder="Describe symptoms (optional, e.g., yellow spots, wilting leaves)"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          rows={4}
        />
      </div>

      <input type="file" onChange={handleFileChange} />
      {preview && <img src={preview} alt="preview" className="preview-img" />}

      <button onClick={handleUpload}>Upload</button>

      {/* Show prediction result */}
      {prediction && (
        <div className="prediction-list">
          <h3>Prediction Result</h3>
          <div className="prediction-box">
            <p>
              <strong>Name:</strong> {prediction.name|| "No Data Available"}
            </p>
            <p>
              <strong>Tips:</strong> {prediction.tips || "No tips available"}
            </p>
            <p>
              <strong>Description:</strong> {prediction.description}
            </p>
            {prediction.url && (
              <img
                src={prediction.url}
                alt={prediction.name}
                className="result-img"
              />
            )}
          </div>

          {/* Show entered symptoms only if user wrote something */}
          {symptoms && (
            <div className="user-symptoms">
              <h4>Your Symptoms:</h4>
              <ul>
                {symptoms.split("\n").map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
