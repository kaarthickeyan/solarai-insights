import React from "react";
import HardwareSetup from "../assets/Hardware_Setup.jpg"; 

function HardwareSimulation() {
  return (
    <section className="section alt-section">
      <div className="section-container">
        <div className="image-content">
          <img
            src={HardwareSetup}
            alt="hardware_Setup"
            className="responsive-image"
          />
        </div>
        <div className="text-content">
          <h2>Smart Hardware Design</h2>
          <p>
          The project incorporates a meticulously engineered interleaved boost converter, 
          featuring innovations such as snubber circuits to minimize switching losses and 
          parallel switches and diodes to reduce voltage drops. This hardware design, combined 
          with AI-based duty cycle control, ensures superior energy efficiency, stable operation, 
          and reduced wear and tear on the components.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HardwareSimulation;

