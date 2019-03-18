import React, { Component } from "react";
import "../People/People.scss";
import { fetchData } from "../utils/API";

class People extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const url = "https://swapi.co/api/people";
    fetchData(url)
      .then(peopleData =>
        this.setState({
          people: peopleData.results
        })
      )
      .catch(error => error.message);
  }

  returnPeople = () => {
    let personItem = this.props.peopleArray.map((person, index) => {
      return (
        <div key={index} className="card">
          <p>Name: {person.personName}</p>
          <p>Homeworld: {person.planetName}</p>
          <p>Population: {person.population}</p>
        </div>
      );
    });
    return personItem;
  };

  render() {
    if (this.props.peopleArray.length === 0) {
      return <div className="loading">Loading</div>;
    } else {
      return (
        <div className="People">
          <h1 className="title">People</h1>
          <div className="button-container" buttons>
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

export default People;
