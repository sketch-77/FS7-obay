import React from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import AddProduct from "./AddProduct";
import ProductsGrid from "./ProductsGrid";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "********",
      currentUser: JSON.parse(localStorage.getItem("user")),
      fetchParams: {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
      FETCH_URL: `/products`,
    };
  }

  render() {
    const { firstName, lastName, email, password } = this.state.currentUser;
    return (
      <div>
        <h1 style={{ color: "black", textAlign: "center" }}>
          Welcome back! You logged in as {firstName}
        </h1>
        <hr />
        <div>
          <Tabs defaultActiveKey="profile">
            <Tab eventKey="profile" title="Profile">
              <div className="container">
                <div className="form-wrapper">
                  <Form>
                    <Form.Group as={Row} controlId="firstName">
                      <Form.Label column sm="4">
                        First Name
                      </Form.Label>
                      <Col sm="8">
                        <Form.Control
                          type="text"
                          placeholder={firstName}
                          readOnly
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="lastName">
                      <Form.Label column sm="4">
                        Last Name
                      </Form.Label>
                      <Col sm="8">
                        <Form.Control
                          type="text"
                          placeholder={lastName}
                          readOnly
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="email">
                      <Form.Label column sm="4">
                        Email
                      </Form.Label>
                      <Col sm="8">
                        <Form.Control
                          type="text"
                          placeholder={email}
                          readOnly
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="password">
                      <Form.Label column sm="4">
                        Password
                      </Form.Label>
                      <Col sm="8">
                        <Form.Control
                          type="text"
                          placeholder="******"
                          readOnly
                        />
                      </Col>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </Tab>
            <Tab eventKey="my-products" title="My products">
              <ProductsGrid
                FETCH_URL={this.state.FETCH_URL}
                fetchParams={this.state.fetchParams}
                showDelete={true}
              ></ProductsGrid>
            </Tab>
            <Tab eventKey="add-product" title="Add product">
              <AddProduct
                FETCH_URL={this.FETCH_URL}
                fetchParams={this.fetchParams}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Profile;
