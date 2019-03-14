import React, { Component } from "react";
import "./App.css";
import Landing from "../Landing/Landing";
import Planets from "../Planets/Planets";
import People from "../People/People";
import Vehicles from "../Vehicles/Vehicles";

class App extends Component {
  constructor() {
    super();
    this.state = {
      landingPage: "landing",
      films: [],
      randomNum: 0
    };
  }

  componentDidMount() {
    const url = "https://swapi.co/api/films";
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          films: data
        })
      )
      .catch(error => error.message);
    this.randomNumberGen();
  }

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
    console.log(ranNum);
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
            />
          </div>
        );
      }
    }
  }
}
export default App;
