import React, { Component } from "react";
import "../Landing/Landing.scss";

class Landing extends Component {
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
