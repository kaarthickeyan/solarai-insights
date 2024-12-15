import React from "react";
import Header from "./components/Header";
import ProjectOverview from "./components/ProjectOverview";
import DynamicDutyCycle from "./components/DynamicDutyCycle";
import Results from "./components/Results";
import AboutProject from "./components/AboutProject"; // Updated import
import "./index.css";
import HardwareSimulation from "./components/HardwareSimulation";
import Realtime_Monitor from "./components/Realtime_Monitor";
import Future_Enhancement from "./components/Future_Enhancement";
import Applications from "./components/Applications";

function App() {
  return (
    <div className="app-container">
      <Header />
      <ProjectOverview />
      <HardwareSimulation/>
      <DynamicDutyCycle />
      <Realtime_Monitor/>
      <Future_Enhancement/>
      <Applications/>
      <Results />
      <AboutProject />
    </div>
  );
}

export default App;
