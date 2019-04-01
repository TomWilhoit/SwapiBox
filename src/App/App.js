import React, { Component } from "react";
import "./App.scss";
import Landing from "../Landing/Landing";
import Planets from "../Planets/Planets";
import People from "../People/People";
import Vehicles from "../Vehicles/Vehicles";
import { fetchData } from "../utils/API";
import { randomNumberGen} from "../utils/randomNum"
import jarjar from "../images/jarjar.jpg";
import { getFilms, getVehicles, getPeople, getPlanets } from "../actions/index";
import { connect } from "react-redux";

 export class App extends Component {
  constructor() {
    super();
    this.state = {
      landingPage: "landing",
      randomNum: 0
    };
  }

  componentDidMount() {
    this.fetchFilms();
    randomNumberGen();
    this.fetchPeople();
    this.fetchVehicles();
    this.fetchPlanets();
  }

  fetchFilms = async () => {
    const url = "https://swapi.co/api/films";
    const data = await fetchData(url);
    this.props.getFilms(data.results);
  };

  fetchPeople = async () => {
    const url = "https://swapi.co/api/people";
    const data = await fetchData(url);
    const result = await this.fetchHomeworlds(data.results)
    this.props.getPeople(result);
  };

  fetchHomeworlds = async (data) => {
    const unresolvedPromises = data.map(async person => {
      const result = await fetchData(person.homeworld)
      const results = await { ...person, homeworld: result.name, population: result.population};
      return results
    });
    return await Promise.all(unresolvedPromises);
  };

  fetchVehicles = async () => {
    const url = "https://swapi.co/api/vehicles";
    const data = await fetchData(url);
    this.props.getVehicles(data.results);
  };

  fetchPlanets = async () => {
    const url = "https://swapi.co/api/planets";
    const data = await fetchData(url);
    const results = await this.addResidents(data.results);
    this.props.getPlanets(results);
  };

  fetchResident = async data => {
    const residents = data.map(async resident => {
      const response = await fetchData(resident);
      const result = response.name;
      return result;
    });
    return Promise.all(residents);
  };

  addResidents = async data => {
    const addedResidents = data.map(async planet => {
      const response = await this.fetchResident(planet.residents);
      const results = { ...planet, residents: response, category: "planet" };
      return results;
    });
    return Promise.all(addedResidents);
  };

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

  

  render() {
    if (this.props.films.length === 0) {
      return <div className="loading-screen">LOADING</div>;
    } else {
      if (this.state.landingPage === "landing") {
        const randomNum = this.state.randomNum || 1
        return (
          <div>
            <Landing
              scrollTitle={this.props.films[randomNum].title}
              scrollEp={this.props.films[randomNum].episode_id}
              scrollText={
                this.props.films[randomNum].opening_crawl
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
            <h1 className="title">SwapiBox</h1>
            <div className="button-container">
              <button onClick={this.goToLanding} className="main-btns">
                Go Back to Landing
              </button>
              <button onClick={this.goToVehicles} className="main-btns">
                Go to Vehicles
              </button>
              <button onClick={this.goToPlanets} className="main-btns">
                Go Planets
              </button>
              <button onClick={this.goToPeople} className="main-btns">
                Go People
              </button>
            </div>
            <div className="img-container">
              <img className="img" alt="jarjar" src={jarjar} />
            </div>
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

export const mapStateToProps = state => ({
  films: state.films,
  vehicles: state.vehicles,
  planets: state.planets,
  people: state.people
});

export const mapDispatchtoProps = dispatch => ({
  getFilms: data => dispatch(getFilms(data)),
  getPlanets: data => dispatch(getPlanets(data)),
  getPeople: data => dispatch(getPeople(data)),
  getVehicles: data => dispatch(getVehicles(data))
});
export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(App);
