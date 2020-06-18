import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import utils from "./utils";
import {NavLink} from "react-router-dom";
import {addToCart} from "../actions/addAction";

const ProductCard = ({showDelete, showDescription, product, addToCart}) => {
const deleteProduct = () => {

}
    return (
        <CardGroup className="m-4 p-0">
            <Card style={{width: "16rem"}}>
                <Card.Img style={{"width": "100%", "height": "15vw", "objectFit": "cover"}} variant="top"
                          src={`/img/${product.img}`}/>
                <Card.Body>
                    <Card.Title>
                        <NavLink to={`/product/${product.id}`}>
                            <strong>{product.title}</strong>
                        </NavLink>
                    </Card.Title>
                    {showDescription ? <Card.Text>{product.description}</Card.Text> : null}
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <strong> Price:</strong> {utils.formatCurrency(product.price || 0)}
                    </ListGroupItem>
                    <ListGroupItem>
                        <strong>Category:</strong> {product.category}
                    </ListGroupItem>
                </ListGroup>
                ​</Card.Body>
                {showDelete ? <Button variant="danger" onClick={() => deleteProduct()}>
                   Delete
                </Button> : <Button variant="primary" onClick={() => addToCart(product)}>
                    <i className="fas fa-shopping-cart"></i>
                    Add to cart
                </Button>}
            </Card>
        </CardGroup>
    );
};

export default connect(null, {addToCart})(ProductCard);
