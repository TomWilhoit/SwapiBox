import React, { Component } from "react";
import "../Planets/Planets.scss";

class Planets extends Component {
  constructor() {
    super();
  }

  returnPlanets = () => {
    const planetItem = this.props.planetsArray.map((planet, index) => {
      return (
        <div key={index} className="card">
          <p>Name: {planet.name}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Population: {planet.population}</p>
          <p>Climate: {planet.climate}</p>
          <p>
            Residents:
            {planet.residents.map((resident, index) => {
              if (planet.residents.length - 1 === index) {
                return <span key={index}> {resident} </span>;
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
          <div className="button-container">
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
            <div className="card-container">{this.returnPlanets()}</div>
        </div>
      );
    }
  }
}

export default Planets;
