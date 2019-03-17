import React, { Component } from "react";
import App from "../App/App";
import "../Planets/Planets.css";

class Planets extends Component {
  constructor() {
    super();
  }

  returnPlanets = () => {
    const planetItem = this.props.planetsArray.map((planet, index) => {
      return (
        <div key={index} className="planet-container">
          <p>Name: {planet.name}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Population: {planet.population}</p>
          <p>Climate: {planet.climate}</p>
          <p>
            Residents:
            {planet.residents.map((resident, index) => {
              if (planet.residents.length - 1 === index) {
                return <span> {resident} </span>;
              } else {
                return <span> {resident},</span>;
              }
            })}
          </p>
        </div>
      );
    });
    return planetItem;
  };

  render() {
    if (this.props.planetsArray.length === 0) {
      return <div>LOADING</div>;
    } else {
      return (
        <div className="Planets">
          <h1 className="title">Planets</h1>
          <div>{this.returnPlanets()}</div>
          <button className="btn" onClick={this.props.goToMain}>
            MAIN
          </button>
          <button className="btn" onClick={this.props.goToPeople}>
            PEOPLE
          </button>
          <button className="btn" onClick={this.props.goToVehicles}>
            VEHICLES
          </button>
        </div>
      );
    }
  }
}

export default Planets;
