import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// const apiRoot = "/products";
import { addToCart } from "../actions/addAction";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="image">
      <img
        src={`/img/${product.img}`}
        alt={product.name}
        className="img-fluid"
      />
      <h3>{product.title}</h3>
      <h3>{product.description}</h3>
      <h3>{product.price}</h3>
      <h3>{product.category}</h3>

      <a
        // can I say addto cart{product.title}
        onClick={() => addToCart("product")}
        className="addToCart cart1"
        href="#"
      >
        Add to cart
      </a>
    </div>
  );
};

export default connect(null, { addToCart })(ProductCard);
