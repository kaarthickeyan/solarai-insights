import React from "react";

function Applications() {
  return (
    <section className="section alt-section">
      <div className="section-container">
        <div className="text-content">
          <h2>Applications and Impact</h2>
          <p>
            This project has vast potential applications in residential and industrial solar energy systems, 
            off-grid installations, EV charging stations, and even disaster relief scenarios. Its integration
            with smart grids and IoT platforms positions it as a critical innovation for smart cities and sustainable energy 
            initiatives. By maximizing the efficiency of renewable energy systems, we aim to contribute meaningfully to global 
            efforts for a cleaner, greener future.
          </p>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <a 
              href="https://solarprediction.streamlit.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                borderRadius: "5px",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              Visit Solar Prediction Model
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Applications;
