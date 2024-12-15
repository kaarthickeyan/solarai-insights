import React from "react";
import AIPrediction from "../assets/AI_Prediction.jpg"; 

function DynamicDutyCycle() {
  return (
    <section className="section">
      <div className="section-container">
        <div className="text-content">
          <h2>Dynamic Duty Cycle Control with AI</h2>
          <p>
            Leveraging real-time data from irradiance and temperature sensors,
            our AI model dynamically adjusts duty cycles for maximum power
            extraction. By managing two distinct duty cycles simultaneously,
            SolarAI optimizes power output and improves circuit stability.
          </p>
        </div>
        <div className="image-content">
          <img
            src={AIPrediction}
            alt="AIPrediction"
            className="responsive-image"
          />
        </div>
      </div>
    </section>
  );
}

export default DynamicDutyCycle;

