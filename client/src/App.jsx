import React, {Component, useState, useEffect} from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Store.js";

import Register from "./components/Register";
import Login from "./components/Login";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Protected from "./components/Protected";
import AddProduct from "./components/AddProduct";

import Home from "./components/Home";
import Profile from "./components/Profile";
import AuthService from "./services/AuthService"


function App() {
    const [currentUser, setCurrentUser] = useState(undefined)

    useEffect(() => {
            let user = AuthService.getCurrentUser();
            if (user.firstName) {
                setCurrentUser(user);
                console.log("MY CURRENT USER FROM APP: ", currentUser)
            }
        }
        , [])

    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <NavBar></NavBar>

                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/login" component={Login}/>
                        <Route path="/protected" component={Protected}/>
                        <Route path="/products" component={Products}/>
                        <Route path="/Cart" component={Cart}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/addproduct" component={AddProduct}/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
