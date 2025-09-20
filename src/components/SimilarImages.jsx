import React from "react";
import "./SimilarImages.css";

export default function SimilarImages({ images, onImageClick }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="similar-images">
      <h3>Suggested plant diseases</h3>
      <div className="image-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="image-card"
            onClick={() => onImageClick(img.name)} // fetch by NAME ✅
          >
            <img src={img.url} alt={img.name} />
            <p>{img.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
