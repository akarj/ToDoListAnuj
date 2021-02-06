import React, { Component } from "react";
import Tags from "../To-do-tags";

class LowerLeft extends Component {
  render() {
    return (
      <>
        {this.props.ListItems
          ? this.props.ListItems.map((Item) => (
              <Tags
                key={Item.Index}
                Item={Item}
                markCompleted={this.props.markCompleted}
              />
            ))
          : null}
      </>
    );
  }
}

export default LowerLeft;
