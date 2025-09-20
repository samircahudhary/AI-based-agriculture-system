import React from "react";
import cowSit from "../assets/cow-sit.jpg";
import cowDance from "../assets/cow-dance.jpg";
import "./login.css";

export default function Login() {
  return (
    <div className="login-container">
      <h2 className="login-heading">Login to Farm.Ai</h2>
      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="login-submit">
          Login
        </button>
      </form>

      {/* Cow Image with Transition */}
      <div className="cow-wrapper">
        <img src={cowSit} alt="Cow Normal" className="cow cow-normal" />
        <img src={cowDance} alt="Cow Dancing" className="cow cow-dance" />
      </div>
    </div>
  );
}
