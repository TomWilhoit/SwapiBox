import React, { Component } from "react";
import "../Vehicles/Vehicles.scss";

class Vehicles extends Component {
  constructor() {
    super();
  }

  returnVehicles = () => {
    let vehicleItem = this.props.vehiclesArray.map((vehicle, index) => {
      return (
        <div key={index} className="card">
          <p>Name: {vehicle.name}</p>
          <p>Model: {vehicle.model}</p>
          <p>Class: {vehicle.vehicle_class}</p>
          <p>Number of Passengers:{vehicle.passengers}</p>
        </div>
      );
    });
    return vehicleItem;
  };

  render() {
    if (this.props.vehiclesArray.length === 0) {
      return <div className="loading">Loading</div>;
    } else {
      return (
        <div className="Vehicles">
          <h1 className="title">Vehicles</h1>
          <div className="button-container">
            <button className="btn" onClick={this.props.goToMain}>
              MAIN
            </button>
            <button className="btn" onClick={this.props.goToPeople}>
              PEOPLE
            </button>
            <button className="btn" onClick={this.props.goToPlanets}>
              PLANETS
            </button>
          </div>
          <div className="card-container">{this.returnVehicles()}</div>
        </div>
      );
    }
  }
}

export default Vehicles;
