import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      img: null,
      price: null,
      category: "",
      currentUser: JSON.parse(localStorage.getItem("user")),
    };
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  onFileChange = (event) => {
    // Update the state
    this.setState({ img: event.target.files[0] });
  };

  onFileUpload = () => {
    const { currentUser } = this.state;
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "imagefile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Request made to the backend api
    // Send formData object
    axios
      .post("/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res));
  };

  handleAddProduct = () => {
    const { title, description, img, price, category } = this.state;

    // Create an object of formData
    const formData = new FormData();

    // Update the formData object

    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("img", img, img.name);
    axios
      .post("/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("**** FORM DATA FRONTEND *******");
        console.log(formData);
        console.log("**** Response frontend *******");
        console.log(res);
      });
  };

  render() {
    const { title, description, img, price, category } = this.state;
    return (
      <div className="container">
        <div className="card card-body">
          <h2>Add product</h2>
          <hr />
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Product title</Form.Label>
            <Form.Control
              name="title"
              type="title"
              placeholder="Enter product title"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicDescription">
            <Form.Label>Product description</Form.Label>
            <Form.Control
              name="description"
              type="description"
              placeholder="Product description"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicImg">
            <Form.Label>Images</Form.Label>
            <Form.Control
              name="img"
              type="file"
              placeholder="Product images"
              onChange={this.onFileChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="text"
              placeholder="Product price"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              name="category"
              type="category"
              placeholder="Product category"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            onClick={this.handleAddProduct}
          >
            Add product
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(AddProduct);
