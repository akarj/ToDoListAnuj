import React, { Component } from "react";
import "./App.css";
import Upper from "./Components/Upper-section/upper-section";
import Tags from "./Components/Lower-section/To-do-tags";
class App extends Component {
  state = {
    ListItems: [
      {
        Index: 1,
        text: "Build React To-Do List App",
        isCompleted: false,
      },
      {
        Index: 2,
        text: "Completed the To-Do List Work",
        isCompleted: true,
      },
    ],

    currentIndex: 3,

    addToListItems: (text) => {
      let ListItems = this.state.ListItems;

      this.setState({
        ListItems: [
          ...ListItems.concat({
            Index: this.state.currentIndex,
            text: text,
            isCompleted: false,
          }),
        ],
        currentIndex: this.state.currentIndex + 1,
      });
    },

    markCompleted: (index) => {
      let newList = [...this.state.ListItems];

      newList[index - 1].isCompleted = true;

      this.setState({
        ListItems: newList,
      });
    },
  };

  render() {
    return (
      <div className="App">
        <div className="Upper">
          <Upper key="Upper" addToListItems={this.state.addToListItems} />
        </div>
        <div className="Main">
          <div className="Lists">
            <div className="Lower">
              <div className="Lower-Lower Left">
                <h1> Task To Complete</h1>
                <div className="scrollable">
                  <article>
                    {this.state.ListItems.map((Item) =>
                      !Item.isCompleted ? (
                        <Tags
                          key={Item.Index}
                          Item={Item}
                          markCompleted={this.state.markCompleted}
                        />
                      ) : null
                    )}
                  </article>
                </div>
              </div>
              <div className="Lower-Lower Right">
                <h1>Completed Task</h1>
                <div className="scrollable">
                  <article>
                    {this.state.ListItems.map((Item) =>
                      Item.isCompleted ? (
                        <Tags
                          key={Item.Index}
                          Item={Item}
                          markCompleted={this.state.markCompleted}
                        />
                      ) : null
                    )}
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
