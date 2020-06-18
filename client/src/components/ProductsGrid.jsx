import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import Row from "react-bootstrap/Row";
import {useLocation} from "react-router-dom";

import ProductCard from "./ProductCard";

const ProductsGrid = (props) => {
    const [products, setProducts] = useState([]);
    const [deletedProd, setDeletedProd] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        setProducts(products.filter(product => product.id !== deletedProd));
    }, [deletedProd]);

    let getProducts = () => {
        axios(`${props.FETCH_URL}`, props.fetchParams)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log("This is the error ********* ", error);
            });
    };

    let deleteProduct = (id) => {
        console.log("****** DELETED PRODUCT ID 8888888: ", id)
            try {
                axios.delete(`/products/${id}`, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                }).then((response) => {
                    setDeletedProd(response.data);
                    console.log("My data");
                    console.log(response.data);
                });
            } catch (error) {
                console.log(error);
            }
    }

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

  return (
    <div>
      <Row>
        {products.map((product) => (
          <Row key={product.id}>
            <ProductCard deleteProduct={deleteProduct} showDelete={props.showDelete} showDescription={false} product={product} />
          </Row>
        ))}
      </Row>
    </div>
  );
};

export default ProductsGrid;
// export default connect(null, { addToCart })(ProductsGrid);
