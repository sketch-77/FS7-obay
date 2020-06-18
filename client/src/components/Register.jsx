import React, { Component, useState, useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from "axios";

import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      loading: false,
    };
  }
  openUserProfile = () => {
    axios("/users/profile", {
      // TODO check is there is a better way to do it
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((response) => {
        this.props.history.push("/profile");
        // window.location.reload();
      })
      .catch((error) => {
        console.log("This is the error ********* ", error);
      });
  };
  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };
  handleRegister = () => {
    this.setState({ loading: true });
    const { firstName, lastName, email, password } = this.state;
    axios("/users/register", {
      method: "POST",
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    })
      .then((response) => {
        this.setState({ loading: false });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        console.log(response.data);
        this.openUserProfile();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    // const { firstName, lastName, email, password } = this.state;
    return (
      <div className="auth-wrapper">
        <div className="auth-inner mb-5">
          <Card>
            <Card.Body>
              <h4>New User Registration</h4>
              <hr />
              {/* <div className="form-group">
                <label>First name</label>
                <input
                  name="firstName"
                  onChange={this.handleInputChange}
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input
                  name="lastName"
                  onChange={this.handleInputChange}
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div> */}
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="firstName"
                  type="text"
                  placeholder="Enter your firstname"
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicLastName">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  name="lastName"
                  type="text"
                  placeholder="Enter your surname"
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  onChange={this.handleInputChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Button
                onClick={this.handleRegister}
                type="Register"
                className="btn btn-primary"
              >
                {this.state.loading ? (
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                ) : (
                  "Register"
                )}
              </Button>
              <p className="forgot-password text-right">
                Already registered?
                <NavLink to="/login">Login</NavLink>
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
export default withRouter(Register);
