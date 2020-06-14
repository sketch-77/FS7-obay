import React, { useState, useEffect } from "react";
import "../App.css";
// import { connect } from "react-redux";
// import { addToCart } from "../actions/addAction";
import axios from "axios";
import ProductCard from "./ProductCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  let getProducts = () => {
    axios(`/products`, {
      method: "GET",
    })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("This is the error ********* ", error);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Row>
      {products.map((product) => (
        <Row key={product.id}>
          <ProductCard product={product} />
        </Row>
      ))}
    </Row>
  );
};

export default Products;
// export default connect(null, { addToCart })(Products);
