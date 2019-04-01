import React, { Component } from "react";
import "../Planets/Planets.scss";
import { connect } from "react-redux";

class Planets extends Component {
  returnPlanets = () => {
    const planetItem = this.props.planets.map((planet, index) => {
      return (
        <div key={index} className="card">
          <p>Name: {planet.name}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Population: {planet.population}</p>
          <p>Climate: {planet.climate}</p>
          <li>Residents:{planet.residents.map((resident,index) => {
            return(<ul key={index}>{resident}</ul>)
          })}</li>
        </div>
      );
    });
    return planetItem;
  };

  render() {
    if (this.props.planets.length === 0) {
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

export const mapStateToProps = state => ({
  films: state.films,
  vehicles: state.vehicles,
  planets: state.planets,
  people: state.people
});

export default connect(
  mapStateToProps,
  null
)(Planets);
