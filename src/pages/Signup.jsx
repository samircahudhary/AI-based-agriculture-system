import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate(); // ✅ initialize navigate

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    region: "",
    place: "",
    state: "",
    location: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isFlashing, setIsFlashing] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form Submitted:", formData);
    alert("Signup Successful!");

   // Signup.jsx -> redirect with state
navigate("/info", { state: formData });
 // ✅ redirect after successful signup
  };

  // Lightning effect
  useEffect(() => {
    let flashTimeout;
    const triggerFlash = () => {
      setIsFlashing(true);
      setTimeout(() => setIsFlashing(false), 300);
      const randomInterval = Math.random() * 10000 + 3000;
      flashTimeout = setTimeout(triggerFlash, randomInterval);
    };
    const initialDelay = Math.random() * 5000;
    flashTimeout = setTimeout(triggerFlash, initialDelay);
    return () => clearTimeout(flashTimeout);
  }, []);

  // Raindrops
  const raindrops = Array.from({ length: 150 }).map((_, index) => {
    const style = {
      left: `${Math.random() * 100}%`,
      animationDuration: `${0.5 + Math.random() * 0.3}s`,
      animationDelay: `${Math.random() * 5}s`,
    };
    return <div key={index} className="raindrop" style={style}></div>;
  });

  return (
    <div className={`storm-container ${isFlashing ? "flashing" : ""}`}>
      {raindrops}

      <div className="signup-container">
        <h2 className="signup-heading">🌱 Create Your Farm.Ai Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
          <input type="date" name="dob" placeholder="Date of Birth" required onChange={handleChange} />
          <input type="text" name="region" placeholder="Region" required onChange={handleChange} />
          <input type="text" name="place" placeholder="Place" required onChange={handleChange} />
          <input type="text" name="state" placeholder="State" required onChange={handleChange} />
          <input type="text" name="location" placeholder="Location" required onChange={handleChange} />
          <input type="tel" name="mobile" placeholder="Mobile Number" pattern="[0-9]{10}" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" required onChange={handleChange} />
          <button type="submit" className="signup-submit">Sign Up</button>
        </form>
        <button className="back-btn" onClick={() => window.history.back()}>⬅ Back</button>
      </div>
    </div>
  );
}
