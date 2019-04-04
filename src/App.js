import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./component/counter/counters";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counters />
        </header>
      </div>
    );
  }
}

export default App;
