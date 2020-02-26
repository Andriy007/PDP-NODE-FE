import React, { Component } from "react";
import history from './history';
import { Router, Route } from "react-router-dom";

import MainRouter from "./routes/index"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <main className="container">
            <Route component={MainRouter} />
          </main>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
