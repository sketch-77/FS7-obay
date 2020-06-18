import React, { Component, useState, useEffect } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store.js";
import Container from "react-bootstrap/Container";
import Register from "./components/Register";
import Login from "./components/Login";
import ProductsGrid from "./components/ProductsGrid";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Protected from "./components/Protected";
import Profile from "./components/Profile";
import IndividualProduct from "./components/IndividualProduct";
import Home from "./components/Home";
import Search from "./components/Search";

function App() {
  const [currentUser, setCurrentUser] = useState(
      JSON.parse(localStorage.getItem("user"))
  );
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [userProducts, setUserProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [FETCH_URL, setFETCH_URL] = useState(`/products/all`);
  const [fetchParams, setfetchParams] = useState({
    method: "GET",
  });

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar currentUser={currentUser}></NavBar>
          <Container className="mt-5">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/protected" component={Protected} />
              <Route path="/product/:id" component={IndividualProduct} />
              <Route path="/products">
                <ProductsGrid showDelete={false}
                  fetchParams={fetchParams}
                ></ProductsGrid>
              </Route>
              <Route path="/Cart" component={Cart} />
              <Route path="/register" component={Register} />
              <Route path="/profile">
                <Profile userProducts={userProducts}></Profile>
              </Route>
              <Route path="/" component={Home} />
            </Switch>
          </Container>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
