import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";
import Row from "react-bootstrap/Row";

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
      <div>This is one product with id {id}</div>
      <div>
        <Row>
              <ProductCard showDescription={true} product={product} />
        </Row>
      </div>
    </div>
  );
}
