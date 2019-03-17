import React, { Component } from "react";
import "../Vehicles/Vehicles.css";

class Vehicles extends Component {
  constructor() {
    super();
  }

  returnVehicles = () => {
    let vehicleItem = this.props.vehiclesArray.map((vehicle, index) => {
      return (
        <div key={index} className="vehicle-container">
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
          <div>{this.returnVehicles()}</div>
          <button onClick={this.props.goToMain}>MAIN</button>
          <button onClick={this.props.goToPeople}>PEOPLE</button>
          <button onClick={this.props.goToPlanets}>PLANETS</button>
        </div>
      );
    }
  }
}

export default Vehicles;
