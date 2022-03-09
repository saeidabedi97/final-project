import React, { Component } from "react";
import Comp1 from "./Comp1";
// import Comp2 from "./Comp2";
import "./App.css";
export class HideShowDiv extends Component {
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
      <div style={{ marginTop: "5%", position: "fixed" }}>
        {showHideComp1 && <Comp1 />}

        <span
          id="message-button"
          onClick={() => this.hideComponent("showHideComp1")}
          data-testid="APIButton"
        >
          Click me
        </span>
      </div>
    );
  }
}

export default HideShowDiv;
