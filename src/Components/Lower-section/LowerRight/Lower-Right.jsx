import React, { Component } from "react";
import Tags from "../To-do-tags";

class LowerRight extends Component {
  render() {
    return (
      <>
        {this.props.ListItems
          ? this.props.ListItems.map((Item) => (
              <Tags key={Item.Index} Item={Item} />
            ))
          : null}
      </>
    );
  }
}

export default LowerRight;
