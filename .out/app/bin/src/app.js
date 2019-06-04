import React from '../node_modules/react/index.js';

class App extends React.Component {
  render() {
    return React.createElement("view", {
      name: "main-view"
    }, React.createElement("text", {
      textSize: 0.10,
      textColor: [0.1, 1, 0.1, 0.84],
      localPosition: [0, 0.25, 0]
    }, this.state.counter));
  }

}

export { App };
