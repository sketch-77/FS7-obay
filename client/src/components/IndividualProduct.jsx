import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../assets/Cart.css";
import Maps from "./Maps";
import ProductCard from "./ProductCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
          <Row>
            <ProductCard
              showDelete={true}
              showDescription={true}
              product={product}
            />
          </Row>
        </Col>
        <Col>
          <Maps />
        </Col>
      </Row>
    </div>
  );
}
