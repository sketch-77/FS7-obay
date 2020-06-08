import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Protected from "./components/Protected";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar></NavBar>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path="/">
                  <Login />
                </Route>
                <Route path="/login" component={Login} />
                <Route path="/protected" component={Protected} />
                <Route path="/register" component={Register} />
                {/* <Route path="/profile" component={Profile}/> */}
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
