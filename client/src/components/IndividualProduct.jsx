import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Maps from "./Maps";
import ProductCard from "./ProductCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/Cart.css";

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
    <div>
      <Row>
        <Col>
          <Row>
            <ProductCard showDescription={true} product={product} />
          </Row>
        </Col>
        <Col>
          <div className="Map">
            <Maps />
          </div>
        </Col>
      </Row>
    </div>
  );
}
