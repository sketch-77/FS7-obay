import React, { useState } from "react";
import "./App.css";
import shoes from "./images/shoes.jpg";
import shirt from "./images/shirt.jpg";
import { connect } from "react-redux";
import { addToCart } from "./actions/addAction";

const Home = (props) => {
  //   const [cartNumbers, setCartNumbers] = useState(0);

  //   const addToCart = () => {
  //     setCartNumbers(cartNumbers + 1);

  return (
    <div className="container">
      <div className="image">
        <img src={shoes} alt="shoes" />
        <h3> shoes</h3>
        <h3> $50</h3>
        <a onClick={props.addToCart} className="addToCart cart1" href="#">
          Add to cart
        </a>
      </div>
      <div className="image">
        <img src={shirt} alt="shirt" />
        <h3> shirt</h3>
        <h3> $10</h3>
        <a onClick={props.addToCart} className="addToCart cart2" href="#">
          Add to cart
        </a>
      </div>
      <div className="image">
        <img src={shoes} alt="shoes" />
        <h3> shoes</h3>
        <h3> $40</h3>
        <a onClick={props.addToCart} className="addToCart cart3" href="#">
          Add to cart
        </a>
      </div>
      <div className="image">
        <img src={shirt} alt="shirt" />
        <h3> shirt</h3>
        <h3> $10</h3>
        <a onClick={props.addToCart} className="addToCart cart4" href="#">
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default connect(null, { addToCart })(Home);
