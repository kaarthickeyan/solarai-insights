import React from "react";
import HardwareResult from "../assets/hardware_result.jpg";
import Converge_result from "../assets/Converge_Results.jpg";

function Results() {
  return (
    <section className="section">
      <h2 className="section-title">Our Achievements</h2>
      <div className="results-grid">
        <div className="result-item">
          <img src={HardwareResult} alt="Result 1" />
        </div>
        <div className="result-item">
          <img src={Converge_result} alt="Result 2" />
        </div>
        {/* Add more result items as needed */}
      </div>
    </section>
  );
}

export default Results;
