import React, { Component } from "react";
import App from "../App/App";
import "../Planets/Planets.css";

class Planets extends Component {
  constructor() {
    super();
  }

  render (){
    return(
      <div className="Planets"> 
        <h1 className="title">Planets</h1>
        <button className="btn" onClick={this.props.goToMain}>MAIN</button>
        <button className="btn" onClick={this.props.goToPeople}>PEOPLE</button>
        <button className="btn" onClick={this.props.goToVehicles}>VEHICLES</button>
      </div>

    )
  }
}

  export default Planets