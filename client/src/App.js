import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
