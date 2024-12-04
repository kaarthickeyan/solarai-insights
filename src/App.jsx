import React from "react";
import Header from "./components/Header";
import ProjectOverview from "./components/ProjectOverview";
import DynamicDutyCycle from "./components/DynamicDutyCycle";
import CellDecay from "./components/CellDecay";
import Results from "./components/Results";
import AboutProject from "./components/AboutProject"; // Updated import
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <ProjectOverview />
      <DynamicDutyCycle />
      <CellDecay />
      <Results />
      <AboutProject /> {/* Replaced Contact with AboutProject */}
    </div>
  );
}

export default App;
