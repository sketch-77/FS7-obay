import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleRegister = () => {
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
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // const { firstName, lastName, email, password } = this.state;
    return (
      <div>
        <h3>Sign Up</h3>
        <div className="form-group">
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
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            name="email"
            onChange={this.handleInputChange}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            onChange={this.handleInputChange}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <button
          onClick={this.handleRegister}
          type="Register"
          className="btn btn-primary btn-block"
        >
          Register
        </button>
        <p className="forgot-password text-right">
          Already registered? <a href="#">Login</a>
        </p>
      </div>
    );
  }
}

export default withRouter(Register);
