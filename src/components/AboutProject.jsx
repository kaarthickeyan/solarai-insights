import React from "react";

function AboutProject() {
  return (
    <section className="section about-project">
      <h2 className="section-title">About SolarAI Insights</h2>
      <div className="section-container">
        <p>
          SolarAI Insights is at the forefront of renewable energy innovation.
          By leveraging advanced Artificial Intelligence techniques, we aim to
          address key challenges in solar power harvesting, ensuring optimal
          power output and system efficiency. Our solution combines real-time
          data from irradiance and temperature sensors to dynamically adapt
          power management strategies, creating a highly responsive and
          sustainable energy ecosystem.
        </p>
        <p>
          Key features of our project include:
          <ul>
            <li>
              Dynamic duty cycle management using AI-enhanced MPPT control for
              maximum power extraction.
            </li>
            <li>
              Proactive monitoring and detection of solar panel degradation,
              extending the lifespan of solar installations.
            </li>
            <li>
              Integration with advanced interleaved boost converters to reduce
              ripple currents and enhance circuit stability.
            </li>
          </ul>
        </p>
        <p>
          With SolarAI Insights, we not only improve the efficiency of solar
          energy systems but also pave the way for a greener, smarter future. By
          combining cutting-edge technology with practical applications, we
          demonstrate the immense potential of AI in addressing global energy
          challenges.
        </p>
      </div>
    </section>
  );
}

export default AboutProject;
