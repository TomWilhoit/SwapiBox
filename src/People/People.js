import React, { Component } from "react";
import "../People/People.scss";
import { connect } from "react-redux";

class People extends Component {
  returnPeople = () => {
    if (this.props.people.length > 0) {
      let personItem = this.props.people.map((person, index) => {
        return (
          <div key={index} className="card">
            <p>Name: {person.name}</p>
            <p>Homeworld: {person.homeworld}</p>
            <p>Population: {person.population}</p>
          </div>
        );
      });
      return personItem;
    } else {
      return <div>loading</div>;
    }
  };

  render() {
    console.log(this.props);
    if (this.props.people.length === 0) {
      return <div className="loading">Loading</div>;
    } else {
      return (
        <div className="People">
          <h1 className="title">People</h1>
          <div className="button-container">
            <button className="btn" onClick={this.props.goToMain}>
              MAIN
            </button>
            <button className="btn" onClick={this.props.goToPlanets}>
              PLANETS
            </button>
            <button className="btn" onClick={this.props.goToVehicles}>
              VEHICLES
            </button>
          </div>
          <div className="card-container">{this.returnPeople()}</div>
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
)(People);
