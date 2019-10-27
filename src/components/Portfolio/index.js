import React from "react";
import "./style.css";

const Portfolio = props => (
  <div className="portfolio-container">
    <img alt={props.title} src={props.image} />
    <div className="overlay">
      <div className="text">
        {props.title}
      </div>
      <div className="text">
        {props.link}
      </div>
    </div>
  </div>
);

export default Portfolio;