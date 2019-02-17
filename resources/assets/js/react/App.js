import React, { Component } from "react";
import Main from "./components/Main";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="appContainer">
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
