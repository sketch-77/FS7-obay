import React, { useState, useEffect } from "react";
import "../App.css";
// import { connect } from "react-redux";
// import { addToCart } from "../actions/addAction";
import axios from "axios";
import ProductCard from "./ProductCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// const database = [
//   {
//     id: 1,
//     name: "Shoes",
//     price: "50",
//     img: "a0953018-ca0e-4bb4-a1cf-87099a2399c4.png",
//   },
//   {
//     id: 2,
//     name: "Shirt",
//     price: "10",
//     img: "a0953018-ca0e-4bb4-a1cf-87099a2399c4.png",
//   },
//   {
//     id: 3,
//     name: "Pants",
//     price: "60",
//     img: "a0953018-ca0e-4bb4-a1cf-87099a2399c4.png",
//   },
// ];

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
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
// export default connect(null, { addToCart })(Products);
