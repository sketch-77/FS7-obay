import React, { useState } from "react";
import "../App.css";
import shoes from "../images/shoes.jpg";
import shirt from "../images/shirt.jpg";
import { connect } from "react-redux";
import { addToCart } from "../actions/addAction";

const Products = (props) => {
  return (
    <div className="container">
      <div className="image">
        <img src={shoes} alt="shoes" />
        <h3> shoes</h3>
        <h3> 50</h3>
        <a
          onClick={() => props.addToCart("shoes")}
          className="addToCart cart1"
          href="#"
        >
          Add to cart
        </a>
      </div>
      <div className="image">
        <img src={shirt} alt="shirt" />
        <h3> shirt</h3>
        <h3> 10</h3>
        <a
          onClick={() => props.addToCart("shirt")}
          className="addToCart cart2"
          href="#"
        >
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default connect(null, { addToCart })(Products);
