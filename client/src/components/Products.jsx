import React, { useState, useEffect } from "react";
import "../App.css";
// import { connect } from "react-redux";
// import { addToCart } from "../actions/addAction";
import axios from "axios";
import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log("********** my fetch url ********* ");
    console.log(props.FETCH_URL);
  }, []);
  let getProducts = () => {
    axios(`${props.FETCH_URL}`, props.fetchParams)
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
    <div>
      <div
        className="position-relative text-align-right"
        style={{ height: "400px", width: "400px" }}
      >
        <div
          className="overflow-hidden background-none!important"
          style={{ height: "400px", width: "400px" }}
        >
          <iframe
            style={{ width: "400px", height: "400px" }}
            src="https://maps.google.com/maps?q=barcelona%2C%20spain&t=&z=13&ie=UTF8&iwloc=&output=embed"
            sytle={{
              frameborder: "0",
              scrolling: "no",
              marginheight: "0",
              marginwidth: "0",
            }}
          >
            {" "}
          </iframe>
          <a href="https://2torrentz.net"></a>
        </div>
      </div>
      <div>
        <Row>
          {products.map((product) => (
            <Row key={product.id}>
              <ProductCard product={product} />
            </Row>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Products;
// export default connect(null, { addToCart })(Products);
