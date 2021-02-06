import React, { Component } from "react";
import "./To-do-tags.css";
class Tags extends Component {
  render() {
    return (
      <>
        {!this.props.Item.isCompleted ? (
          <div className="To-Do-Tag">
            <label className="checkbox">
              <span className="checkbox__input">
                <input
                  type="checkbox"
                  className="checked"
                  name={this.props.Item.Index}
                  id={this.props.Item.Index}
                  onChange={() =>
                    this.props.markCompleted(this.props.Item.Index)
                  }
                />
                <span className="checkbox__control"></span>
              </span>

              <label htmlFor={this.props.Item.Index}>
                {this.props.Item.text}
              </label>
            </label>
          </div>
        ) : (
          <div className="To-Do-Tag Completed">
            {"     "}
            <span> </span>
            <label htmlFor={this.props.Item.Index}>
              {this.props.Item.text}
            </label>
            <br />
          </div>
        )}
      </>
    );
  }
}

export default Tags;
