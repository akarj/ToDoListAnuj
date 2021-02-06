import React, { Component } from "react";
import "./upper-section.css";

class Upper extends Component {
  state = {
    inputTextInInputBox: "",
    currentIndex: 1,

    onSubmition: (text) => {
      text.preventDefault();
      if (this.state.inputTextInInputBox === "") {
        return;
      }
      this.props.addToListItems(this.state.inputTextInInputBox);

      this.setState({
        inputTextInInputBox: "",
        currentIndex: this.state.currentIndex + 1,
      });
    },
    changeHandler: (text) => {
      this.setState({
        inputTextInInputBox: text.target.value,
      });
    },
  };
  render() {
    return (
      <div className="SearchBar">
        <form method="post">
          <input
            type="text"
            className="text SeachPanel"
            value={this.state.inputTextInInputBox}
            onChange={this.state.changeHandler}
            placeholder="Add A task..."
          />
          <button className="SearchBarButton" onClick={this.state.onSubmition}>
            Add A Task
          </button>
        </form>
      </div>
    );
  }
}

export default Upper;
