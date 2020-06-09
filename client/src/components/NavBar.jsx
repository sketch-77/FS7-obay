import React, { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";

function NavBar(props) {
  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">oBay</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to="/register">
            Register
          </Nav.Link>
          {/*<Nav.Link as={NavLink} to="/products">*/}
          {/*  Products*/}
          {/*</Nav.Link>*/}
          <Nav.Link as={NavLink} to="/addproduct">
            Add Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/profile">
            Profile
          </Nav.Link>

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search products</Button>
        </Form>
      <Nav>
        <Nav.Link as={NavLink} to="/products">
          <i className="fas fa-shopping-cart"></i>
          Cart <span>{props.cartProps.cartNumbers}</span>
        </Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { getNumbers })(NavBar);
