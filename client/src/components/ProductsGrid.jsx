import React, { useState, useEffect } from "react";
import "../App.css";
// import { connect } from "react-redux";
// import { addToCart } from "../actions/addAction";
import axios from "axios";
import ProductCard from "./ProductCard";

import Row from "react-bootstrap/Row";
import {useLocation} from "react-router-dom";

const ProductsGrid = (props) => {
    const [products, setProducts] = useState([]);
    const { search } = useLocation();

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
        props.FETCH_URL ? getProducts() : getSearchedItems();
    }, [search]);

    const getSearchedItems = async (req, res, next) => {
        console.log("MY PRODUCTS SEARCH KEYWORD FROM REQ.QUERY ", search)
        axios(`/products/search${search}`, {
            method: "GET",
        })
            .then((response) => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("This is the error ********* ", error);
            });
    }
  //
  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <div>
      <Row>
        {products.map((product) => (
          <Row key={product.id}>
            <ProductCard showDescription={false} product={product} />
          </Row>
        ))}
      </Row>
    </div>
  );
};

export default ProductsGrid;
// export default connect(null, { addToCart })(ProductsGrid);
