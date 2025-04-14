import React, { Component } from "react";

export class App extends Component {

    state = {
      count: 0,
    };

    handleIncrement = () => {
      this.setState((c) => ({
        count: c.count + 1
      }));
    };
    render() {
    return (
      <>
        <button onClick={this.handleIncrement}>count is {this.state.count}</button>
      </>
    );
  }
}

export default App;
