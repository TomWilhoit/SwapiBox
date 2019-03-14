import React, { Component } from "react";
import App from "../App/App";
import "../Vehicles/Vehicles.css";

class Vehicles extends Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className="Vehicles"> 
        <h1 className="title" >Vehicles</h1>
        <button onClick={this.props.goToMain}>MAIN</button>
        <button onClick={this.props.goToPeople}>PEOPLE</button>
        <button onClick={this.props.goToPlanets}>PLANETS</button>
      </div>

    )
  }
}

  export default Vehicles