import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../assets/Cart.css";
import Maps from "./Maps";
import ProductCard from "./ProductCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function IndividualProduct() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  let getProductById = () => {
    try {
      axios(`/products/${id}`, {
        method: "GET",
      }).then((response) => {
        setProduct(response.data);

        console.log("My data");
        console.log(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(id);
    getProductById();
  }, []);

  return (
    <div className="auth-wrapper">
      <Row>
        <Col>
          <ProductCard showDescription={true} product={product} />
        </Col>
        <Col>
          <Maps />
        </Col>
      </Row>
    </div>
  );
}
