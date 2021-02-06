import React, { Component } from "react";
import LowerRight from "./LowerRight/Lower-Right";
import LowerLeft from "./LowerLeft/Lower-Left";
import "./Lower-section.css";

class Lower extends Component {
  state = {
    Incomplited: this.props
      .Listing()
      .filter((ListItem) => ListItem.isCompleted),
    Complited: this.props.ListItems.filter((ListItem) => !ListItem.isCompleted),
  };
  render() {
    return (
      <div className="lower">
        <div className="Lower-Upper-Section">Sucess Lower Div</div>
        <div className="Lower-Lower-Left">
          <LowerLeft key="Lower_Left" Incomplited={this.state.Complited} />
          <LowerRight key="Lower_Right" Complited={this.state.Incomplited} />
        </div>
      </div>
    );
  }
}

export default Lower;
