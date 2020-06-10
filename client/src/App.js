import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Products />
      </div>
    </Provider>
  );
}

export default App;
