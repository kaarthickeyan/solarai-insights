import React from "react";
import SolarPanel from "../assets/Solar_panel.jpg";


function ProjectOverview() {
  return (
    <section className="section">
      <div className="section-container">
        <div className="text-content">
          <h2>About SolarAI Insights</h2>
          <p>
            SolarAI Insights integrates Artificial Intelligence with advanced
            interleaved boost converters to optimize solar power harvesting.
            Our innovative solution addresses challenges like dynamic
            environmental conditions, circuit inefficiencies, and solar panel
            degradation, ensuring optimal power output and system longevity.
          </p>
        </div>
        <div className="image-content">
          <img
            src={SolarPanel}
            alt="Solar Panels"
            className="responsive-image"
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectOverview;
