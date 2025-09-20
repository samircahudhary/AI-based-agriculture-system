import React from "react";
import { useNavigate } from "react-router-dom";
import "./Firstpage.css";

export default function FirstPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div class="starfall">
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
  <div class="falling-star"></div>
</div>
      <div className="overlay">
        <h1 className="heading"> Welcome to Farm.Ai</h1>
        <div className="button-group">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="signup-btn" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
