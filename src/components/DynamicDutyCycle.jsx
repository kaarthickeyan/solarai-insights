import React from "react";

function DynamicDutyCycle() {
  return (
    <section className="section alt-section">
      <div className="section-container">
        <div className="image-content">
          <img
            src="/path-to-image/boost-converter.jpg"
            alt="Boost Converter"
            className="responsive-image"
          />
        </div>
        <div className="text-content">
          <h2>Dynamic Duty Cycle Control with AI</h2>
          <p>
            Leveraging real-time data from irradiance and temperature sensors,
            our AI model dynamically adjusts duty cycles for maximum power
            extraction. By managing two distinct duty cycles simultaneously,
            SolarAI optimizes power output and improves circuit stability.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DynamicDutyCycle;
