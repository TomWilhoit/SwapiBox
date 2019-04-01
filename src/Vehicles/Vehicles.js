import React, { Component } from "react";
import "../Vehicles/Vehicles.scss";
import { connect } from "react-redux";

export class Vehicles extends Component {
  returnVehicles = () => {
    let vehicleItem = this.props.vehicles.map((vehicle, index) => {
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
    if (this.props.vehicles.length === 0) {
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

export const mapStateToProps = state => ({
  films: state.films,
  vehicles: state.vehicles,
  planets: state.planets,
  people: state.people
});

export default connect(
  mapStateToProps,
  null
)(Vehicles);
