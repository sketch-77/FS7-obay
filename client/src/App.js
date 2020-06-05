import React, { Component } from "react";
import NavBar from "./components/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Login from "./components/Login";
// import SignUp from "./components/SignUp";

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
                <Route exact path="/"></Route>
                {/* <Route path="/login" component={Login} />
                <Route path="/products" component={Login} /> */}
                {/* <Route path="/sign-up"><SignUp/></Route> */}
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
