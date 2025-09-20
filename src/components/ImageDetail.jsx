import React from "react";
import "./ImageDetail.css";

export default function ImageDetail({ detail }) {
  if (!detail) return null;

  return (
    <div className="image-detail">
      <h3>Plant Detail</h3>
      <p>
        <strong>Name:</strong> {detail.name}
      </p>
      <p>
        <strong>Tips:</strong> {detail.tips}
      </p>
      <p>
        <strong>Description:</strong> {detail.description}
      </p>
      {detail.url && <img src={detail.url} alt={detail.name} />}
    </div>
  );
}
