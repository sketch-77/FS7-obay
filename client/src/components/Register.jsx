import React, { Component, useState, useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from "axios";

import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

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
    // adding Button Loading State to the register button
    // function simulateNetworkRequest() {
    //   return new Promise((resolve) => setTimeout(resolve, 2000));
    // }
    // function LoadingButton() {
    //   const [isLoading, setLoading] = useState(false);
    //   useEffect(() => {
    //     if (isLoading) {
    //       simulateNetworkRequest().then(() => {
    //         setLoading(false);
    //       });
    //     }
    //   }, [isLoading]);
    //   const handleClick = () => setLoading(true);
    //   return (
    //     <Button
    //       variant="primary"
    //       disabled={isLoading}
    //       onClick={!isLoading ? handleClick : null}
    //     >
    //       {isLoading ? "Loading…" : "Click to Register"}
    //     </Button>
    //   );
    // }
  };
  render() {
    // const { firstName, lastName, email, password } = this.state;
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
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
            <Button
              onClick={this.handleRegister}
              type="Register"
              className="btn btn-primary btn-block"
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
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Register);
