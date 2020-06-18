import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

import Card from "react-bootstrap/Card";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handleLogin = () => {
    const { email, password } = this.state;
    try {
      axios("/users/login", {
        method: "POST",
        data: {
          email,
          password,
        },
      }).then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        this.openUserProfile();
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div className="auth-wrapper">
          <div className="auth-inner mb-5">
            <Card>
              <Card.Body>
                <h4>Welcome Back!</h4>
                <hr />
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
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember Me!" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="button"
                  onClick={this.handleLogin}
                >
                  Log in
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
