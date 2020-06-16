import React, { useState, useEffect } from "react";
import "../App.css";
import "../assets/Product.css";
// import { connect } from "react-redux";
// import { addToCart } from "../actions/addAction";
import axios from "axios";
import ProductCard from "./ProductCard";
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
      <div className="slider-box">
        <p className="time">New arrivals</p>
        <div className="img-box"></div>
        <img src="Ankara Bag for ladies.jpg"></img>
        <p className="detail">
          {" "}
          New Ankara collection
          <a href="#" cclassName="price">
            price-40$
          </a>
        </p>
        <div className="cart">
          <a href="#">Add To Cart</a>
        </div>
      </div>
      <Row>
        {products.map((product) => (
          <Row key={product.id}>
            <ProductCard product={product} />
          </Row>
        ))}
      </Row>
    </div>
  );
};

export default Products;
// export default connect(null, { addToCart })(Products);
