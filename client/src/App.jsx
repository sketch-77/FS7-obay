import React, { Component } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store.js";

import Register from "./components/Register";
import Login from "./components/Login";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Protected from "./components/Protected";

function App() {
  return (
    <Provider store={store}>
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
                <Route path="/products" component={Products} />
                <Route path="/Cart" component={Cart} />
                <Route path="/register" component={Register} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
