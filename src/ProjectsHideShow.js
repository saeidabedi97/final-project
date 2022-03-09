import React, { Component } from "react";
import Projects from "./Projects";
// import Comp2 from "./Comp2";
import "./App.css";
export class ProjectsHideShow extends Component {
  constructor() {
    super();
    this.state = {
      name: "ReactJS",
      showHideComp1: false,
      //   showHideComp2: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideComp1":
        this.setState({ showHideComp1: !this.state.showHideComp1 });
        break;
      //   case "showHideComp2":
      //     this.setState({ showHideComp2: !this.state.showHideComp2 });
      //     break;
      default:
        // eslint-disable-next-line no-unused-expressions
        null;
    }
  }
  render() {
    const { showHideComp1 } = this.state;
    return (
      <div style={{ marginTop: "10%", position: "absolute" }}>
        {showHideComp1 && <Projects />}

        <button
          id="showMore-button"
          onClick={() => this.hideComponent("showHideComp1")}
        >
          Show more{" "}
        </button>
      </div>
    );
  }
}

export default ProjectsHideShow;
