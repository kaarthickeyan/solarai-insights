import React from "react";
import RealtimeMonitor from "../assets/Realtime_montior.jpg"; 

function Realtime_Monitor() {
  return (
    <section className="section alt-section">
      <div className="section-container">
        <div className="image-content">
          <img
            src={RealtimeMonitor}
            alt="realtime_montior"
            className="responsive-image"
          />
        </div>
        <div className="text-content">
          <h2>Real-Time Monitoring and Connectivity</h2>
          <p>
          Using IoT technology, the system facilitates real-time monitoring of solar panel performance 
          and environmental conditions. This data is transmitted securely to a cloud server for analysis, 
          providing insights into energy production trends. The connectivity also allows users to remotely 
          monitor system performance and make data-driven decisions for energy management.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Realtime_Monitor;

