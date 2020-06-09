import React, {Component} from "react";
import {Route, withRouter} from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            img: "",
            price: null,
            category: "",
        };
    }

    handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value,
        });
    };


    handleAddProduct = () => {
        const {title, description, img, price, category} = this.state;
        axios("/products", {
            method: "POST",
            data: {
                title, description, img, price, category
            },
        })
            .then(response => {
                console.log("I AM HERE!")
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    };


    render() {
        const {title, description, img, price, category} = this.state;
        return (
            <div>
                <h2>Add product</h2>
                <hr/>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Product title</Form.Label>
                    <Form.Control name="title" type="title" placeholder="Enter product title"
                                  onChange={this.handleInputChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Product description</Form.Label>
                    <Form.Control name="description" type="description" placeholder="Product description"
                                  onChange={this.handleInputChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicImg">
                    <Form.Label>Images</Form.Label>
                    <Form.Control name="img" type="img" placeholder="Product images"
                                  onChange={this.handleInputChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name="price" type="price" placeholder="Product price"
                                  onChange={this.handleInputChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control name="category" type="category" placeholder="Product category"
                                  onChange={this.handleInputChange}/>
                </Form.Group>
                <Button variant="primary" type="button" onClick={this.handleAddProduct}>
                    Add product
                </Button>
            </div>
        );
    }
}

export default withRouter(AddProduct);