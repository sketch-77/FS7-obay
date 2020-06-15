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

  openUserProfile = () => {
    axios("/users/profile", {
      // TODO check is there is a better way to do it
      headers: {"Authorization": "Bearer " + localStorage.getItem("token")}
    })
        .then(response => {

          this.props.history.push('/profile');
          // window.location.reload();
        })
        .catch(error => {
          console.log("This is the error ********* ", error)
        })
  };

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
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
