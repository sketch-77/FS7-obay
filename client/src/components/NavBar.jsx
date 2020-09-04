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
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
      sticky="top"
    >
      <Navbar.Brand as={NavLink} to="/">
        <img
          src="/logo.svg"
          height="30"
          className="d-inline-block align"
          alt="AfriKbay-logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto align-items-center">
          <Nav.Link as={NavLink} to="/products">
            Products
          </Nav.Link>
          {currentUser && (
            <Nav.Link as={NavLink} to="/profile">
              Profile
            </Nav.Link>
          )}
          {!currentUser && (
            <Nav.Link as={NavLink} to="/register">
              Register
            </Nav.Link>
          )}
          {currentUser ? (
            <Form inline>
              <Button variant="dark" onClick={logOut}>
                Logout
              </Button>
            </Form>
          ) : (
            <Nav.Link as={NavLink} to="/login">
              <Form inline>
                <Button variant="dark">Login</Button>
              </Form>
            </Nav.Link>
          )}
        </Nav>

        <Search></Search>

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
