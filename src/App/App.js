import React, { Component } from "react";
import "./App.css";
import Landing from "../Landing/Landing";
import Planets from "../Planets/Planets";
import People from "../People/People";
import Vehicles from "../Vehicles/Vehicles";
import { fetchData } from "../utils/API"

class App extends Component {
  constructor() {
    super();
    this.state = {
      landingPage: "landing",
      films: [],
      randomNum: 0,
      people: [],
      vehicles: [],
      planets: []
    };
  }

  componentDidMount() {
    const url = "https://swapi.co/api/films";
    fetchData(url)
      .then(data =>
        this.setState({
          films: data
        })
      )
      .catch(error => error.message);
      // this error message should be set in state
    this.randomNumberGen();
    this.fetchPeople();
    this.fetchVehicles();
    this.getPlanets();
  }

  fetchPeople = () => {
    const url = "https://swapi.co/api/people";
    fetchData(url)
      .then(data => this.fetchHomeworlds(data.results))
      .then(homePlanets =>
        this.setState({
          people: homePlanets
        })
      )
      .catch(error => error.message);
  };

  fetchHomeworlds = array => {
    const unresolvedPromises = array.map(person => {
      return fetchData(person.homeworld)
        .then(data => ({
          planetName: data.name,
          personName: person.name,
          population: data.population
        }))
        .catch(error => error.message);
    });
    return Promise.all(unresolvedPromises);
  };

  fetchVehicles = () => {
    const url = "https://swapi.co/api/vehicles";
    fetchData(url)
      .then(data =>
        this.setState({
          vehicles: data.results
        })
      )
      .catch(error => error.message);
  };

  getPlanets = () => {
    const planetUrl = "https://swapi.co/api/planets";
    fetchData(planetUrl)
      .then(planets => this.addResidents(planets))
      .then(planets => this.setState({ planets: planets }))
      .catch(error => this.setState({ error: error.message }));
  };

  addResidents(planets) {
    const addedResidents = planets.results.map(planet => {
      return this.getResidents(planet).then(result => ({
        ...planet,
        residents: result,
        category: "planet"
      }));
    });
    return Promise.all(addedResidents);
  }

  getResidents(planet) {
    const residents = planet.residents.map(resident => {
      return fetchData(resident)
        .then(result => result.name);
    });
    return Promise.all(residents);
  }

  //

  goToMain = () => {
    this.setState({
      landingPage: "main"
    });
  };

  goToLanding = () => {
    this.setState({
      landingPage: "landing"
    });
  };

  goToPlanets = () => {
    this.setState({
      landingPage: "planets"
    });
  };

  goToPeople = () => {
    this.setState({
      landingPage: "people"
    });
  };

  goToVehicles = () => {
    this.setState({
      landingPage: "vehicles"
    });
  };

  randomNumberGen = () => {
    let ranNum = Math.floor(Math.random() * 6);
    this.setState({
      randomNum: ranNum
    });
  };

  render() {
    if (this.state.films.length === 0) {
      return <div className="loading-screen">LOADING</div>;
    } else {
      if (this.state.landingPage === "landing") {
        return (
          <div>
            <Landing
              scrollTitle={
                this.state.films.results[this.state.randomNum || 1].title
              }
              scrollEp={
                this.state.films.results[this.state.randomNum || 1].episode_id
              }
              scrollText={
                this.state.films.results[this.state.randomNum || 1]
                  .opening_crawl
              }
            />
            <button onClick={this.goToMain} className="skip-landing-btn">
              Skip
            </button>
          </div>
        );
      } else if (this.state.landingPage === "main") {
        return (
          <div className="main-page">
            <div className="title">SwapiBox</div>
            <button onClick={this.goToLanding} className="return-landing-btn">
              Go Back to Landing
            </button>
            <button onClick={this.goToVehicles} className="go-to-vehicles-btn">
              Go to Vehicles
            </button>
            <button onClick={this.goToPlanets} className="go-to-planets-btn">
              Go Planets
            </button>
            <button onClick={this.goToPeople} className="go-to-people-btn">
              Go People
            </button>
          </div>
        );
      } else if (this.state.landingPage === "vehicles") {
        return (
          <div className="vehicles-page">
            <Vehicles
              vehiclesArray={this.state.vehicles}
              goToPeople={this.goToPeople}
              goToPlanets={this.goToPlanets}
              goToMain={this.goToMain}
            />
          </div>
        );
      } else if (this.state.landingPage === "planets") {
        return (
          <div className="planets-page">
            <Planets
              planetsArray={this.state.planets}
              goToVehicles={this.goToVehicles}
              goToPeople={this.goToPeople}
              goToMain={this.goToMain}
            />
          </div>
        );
      } else if (this.state.landingPage === "people") {
        return (
          <div className="people-page">
            <People
              goToVehicles={this.goToVehicles}
              goToPlanets={this.goToPlanets}
              goToMain={this.goToMain}
              peopleArray={this.state.people}
            />
          </div>
        );
      }
    }
  }
}
export default App;
