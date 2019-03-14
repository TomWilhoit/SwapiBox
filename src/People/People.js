import React, { Component } from "react";
import App from "../App/App";
import "../People/People.css";

class People extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="People"> 
        <h1 className="title" >People</h1>
        <button onClick={this.props.goToMain}>MAIN</button>
        <button onClick={this.props.goToPlanets}>PLANETS</button>
        <button onClick={this.props.goToVehicles}>VEHICLES</button>
      </div>

    )
  }
}

  export default People