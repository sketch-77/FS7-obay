import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

// const apiRoot = "/products";
import { addToCart } from "../actions/addAction";

const ProductCard = ({ product, addToCart }) => {
  return (
    <CardGroup className="m-4 p-0">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`/img/${product.img}`} />
        <Card.Body>
          <Card.Title>
            <strong>{product.title}</strong>
          </Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <strong> Price:</strong> ${product.price}
          </ListGroupItem>
          <ListGroupItem>
            <strong>Category:</strong> {product.category}
          </ListGroupItem>
        </ListGroup>

        <Button variant="secondary" onClick={() => addToCart(product)}>
          <i className="fas fa-shopping-cart"></i>
          Add to cart
        </Button>
      </Card>
    </CardGroup>

    // <div className="image">
    //   <img
    //     src={`/img/${product.img}`}
    //     alt={product.name}
    //     className="img-fluid"
    //   />
    //   <h5>
    //     <strong>{product.title}</strong>
    //   </h5>
    //   <h3 className="card-text">{product.description}</h3>
    //   <h3>{product.price}</h3>
    //   <h3>{product.category}</h3>
    //   <button className="addToCart cart1" onClick={() => addToCart(product)}>
    //     <i className="fas fa-shopping-cart"></i>
    //     Add to cart
    //   </button>
    // </div>
  );
};

export default connect(null, { addToCart })(ProductCard);
