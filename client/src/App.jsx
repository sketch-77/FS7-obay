import React, { Component, useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store.js";

import Register from "./components/Register";
import Login from "./components/Login";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Protected from "./components/Protected";
import AddProduct from "./components/AddProduct";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {
    console.log("This is my current user from useEffect", currentUser);
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar currentUser={currentUser}></NavBar>​
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/protected" component={Protected} />
            <Route path="/products/:id" component={Product} />
            <Route path="/products" component={Products} />
            <Route path="/Cart" component={Cart} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/addproduct" component={AddProduct} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
