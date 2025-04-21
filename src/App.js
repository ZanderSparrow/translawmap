import React, { useState } from "react";
import USAMap from "react-usa-map";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StateModal from "./StateModal";
import stateLaws from "./data/stateLaws.json"

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedState, setSelectedState] = useState(null);

  const progressiveColorMapping = {
    "very progressive": "#3495eb", // light blue
    progressive: "#a3d8f4", // gray
    moderate: "#f4c2d7", // light pink
    conservative: "#f17bb0", // darker pink
    "very conservative": "#d23369", // darest pink
  };

  const stateFills = {};

  Object.keys(stateLaws).forEach((key) => {
    stateFills[key] = {
      fill: progressiveColorMapping[stateLaws[key]["alignment"]],
    };
  });

  const customConfig = () => {
    return stateFills;
  };

  const mapHandler = (event) => {
    setSelectedState({
      name: event.target.textContent,
      abbr: event.target.dataset.name,
    });
    setShowModal(true);
  };

  return (
    <div className="min-vh-100 bg-light">
      <header className="text-center py-4">
        <h2 className="display-4">US Transgender Law Map</h2>
        <h3>
          <small class="text-body-secondary">
            Click a state to view its laws regarding gender identity and hormone
            access
          </small>
        </h3>
        <p className="lead"></p>
      </header>

      <main className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="map-container">
              <USAMap
                customize={customConfig()}
                onClick={mapHandler}
                title="US transgender laws"
              />
            </div>
          </div>
        </div>
      </main>

      <StateModal
        selectedState={selectedState}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default App;
