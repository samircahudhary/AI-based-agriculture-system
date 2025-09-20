// src/components/SearchBar.jsx
import React, { useState } from "react";
import "../styles/SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") onSearch(city);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKey}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
