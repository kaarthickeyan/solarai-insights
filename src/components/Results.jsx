import React from "react";

function Results() {
  return (
    <section className="section">
      <h2 className="section-title">Our Achievements</h2>
      <div className="results-grid">
        <div className="result-item">
          <img src="/path-to-image/result1.jpg" alt="Result 1" />
          <p>Efficiency Improvements Over Time</p>
        </div>
        <div className="result-item">
          <img src="/path-to-image/result2.jpg" alt="Result 2" />
          <p>Power Output vs. Weather Conditions</p>
        </div>
        {/* Add more result items as needed */}
      </div>
    </section>
  );
}

export default Results;
