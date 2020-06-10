import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/addAction";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="image">
      <img src={product.image} alt={product.name} className="img-fluid" />
      <h3>{product.name}</h3>
      <h3>{product.price}</h3>
      <a
        onClick={() => addToCart("shoes")}
        className="addToCart cart1"
        href="#"
      >
        Add to cart
      </a>
    </div>
  );
};

export default connect(null, { addToCart })(ProductCard);
