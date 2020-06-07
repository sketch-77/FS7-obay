import React, { Component } from "react";
import { Route , withRouter} from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";


const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  // const handleProductClick = () => {
  //   console.log("lala")
  // }

  const openUserProfile = () => {
    axios("/users/profile", {
        headers: {"x-access-token": localStorage.getItem("token")}
    })
      .then(response => {
          console.log(response.data)
          this.props.history.push('/profile');
      })
      .catch(error => {console.log("This is the error ********* ", error)})
    };

  const handleLogin = () => {
    const { email, password } = this.state;
    axios("/users/login", {
      method: "POST",
      data: {
        email,
        password
      },
    })
    .then(response => {
        localStorage.setItem("token", response.data.token);
        this.openUserProfile();
        console.log(response.data)
    })
    .catch(error => {console.log(error)})
  };

  
  const Login = () => (
    <Form>
      <h2>Login</h2>
      <hr />
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="button">
        Submit
      </Button>
    </Form>
  );
  
  export default Login;
