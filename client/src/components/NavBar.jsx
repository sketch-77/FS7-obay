import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
// import {ReactComponent as logo} from "./public";

import { NavLink } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { getNumbers } from "../actions/getAction";
import compose from "recompose/compose";
import Search from "./Search";

function NavBar(props) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {
    getNumbers();
  }, []);

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("user")));
  }, [localStorage.getItem("user")]);

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    //open homepage on logout
    props.history.push("/");
  };

  const openLoginPage = () => {
    // props.history.push('/login');
  };

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src="/logo.svg"
          height="30"
          className="d-inline-block align"
          alt="AfriKbay-logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>

          {currentUser ? null : (
            <Nav.Link as={NavLink} to="/register">
              Register
            </Nav.Link>
          )}
          <Nav.Link as={NavLink} to="/products">
            Products
          </Nav.Link>
          {currentUser ? (
            <Nav.Link as={NavLink} to="/profile">
              Profile
            </Nav.Link>
          ) : null}
          {currentUser ? (
            <Form inline>
              <Button variant="outline-success" onClick={logOut}>
                Logout
              </Button>
            </Form>
          ) : (
            <Nav.Link as={NavLink} to="/login">
              <Form inline>
                <Button variant="outline-success">Login</Button>
              </Form>
            </Nav.Link>
          )}
        </Nav>
<Search></Search>
        {/*<Form inline>*/}
        {/*  <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
        {/*  <Button variant="outline-success">Search products</Button>*/}
        {/*</Form>*/}

        <Nav.Link as={NavLink} to="/Cart">
          <i className="fas fa-shopping-cart"></i>
          Cart <span>{props.cartProps.products.length}</span>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { getNumbers })
)(NavBar);
