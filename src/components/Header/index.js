import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Hello, world!</h1>
        <p>I'm a jumbotron!</p>
        <p>
          <button className="btn btn-primary btn-lg">Learn more</button>
        </p>
      </div>
    </div>
  );
}

export default Header;