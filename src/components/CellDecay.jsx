import React from "react";

function CellDecay() {
  return (
    <section className="section">
      <div className="section-container">
        <div className="text-content">
          <h2>Predicting Solar Panel Lifespan</h2>
          <p>
            Solar panel performance degrades over time. SolarAI Insights uses
            historical performance data to detect power losses beyond expected
            thresholds. By training an AI model to monitor deviations in maximum
            power, we provide early warnings of potential cell decay, enabling
            timely maintenance and extending panel lifespan.
          </p>
        </div>
        <div className="image-content">
          <img
            src="/path-to-image/panel-decay.jpg"
            alt="Panel Decay"
            className="responsive-image"
          />
        </div>
      </div>
    </section>
  );
}

export default CellDecay;
