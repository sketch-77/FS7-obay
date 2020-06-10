import React, { useState } from "react";
import "../App.css";
import shoes from "../images/shoes.jpg";
import shirt from "../images/shirt.jpg";
// import { connect } from "react-redux";
// import { addToCart } from "../actions/addAction";

import ProductCard from "./ProductCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const database = [
  {
    id: 1,
    name: "Shoes",
    price: "50",
    image: shoes,
  },
  {
    id: 2,
    name: "Shirt",
    price: "10",
    image: shirt,
  },
  {
    id: 3,
    name: "Pants",
    price: "60",
    image: shirt,
  },
];

const Products = (props) => {
  const [products, setProducts] = useState(database);
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
