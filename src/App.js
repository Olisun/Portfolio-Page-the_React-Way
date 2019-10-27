import React, { Component } from "react";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import projects from "./projects.json";
import "./App.css";

class App extends Component {
  state = {
    projects,
  }

  render() {
    return (
      <div className="container">
        <div>
          <Header />
        </div>
        <div className="row">
          {this.state.projects.map(project => (
            <Portfolio
              key={project.id}
              id={project.id}
              title={project.title}
              link={project.link}
              image={project.image}
             />
          ))}
        </div>
      </div>
    )
  }
}

export default App;