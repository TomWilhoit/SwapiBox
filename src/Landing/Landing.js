import React, { Component } from "react";
import App from "../App/App";
import "../Landing/Landing.css";

class Landing extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    <div className="landing">
      <div className="fade">
        <section className="star-wars">
          <div className="crawl">
            <div className="title">
              <p>Episode {this.props.scrollEp}</p>
              <h1>{this.props.scrollTitle}</h1>
            </div>
            {this.props.scrollText}
          </div>
        </section>
      </div>
      </div>
    );
  }
}

export default Landing;
