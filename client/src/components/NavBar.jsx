import React, {useEffect, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {NavLink} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import {getNumbers} from "../actions/getAction";
import AuthService from "../services/AuthService"


function NavBar(props) {

const [currentUser, setCurrentUser] = useState({});


    useEffect(() => {
        getNumbers();
    }, []);

    useEffect(() => {
        setCurrentUser(AuthService.getCurrentUser());
        console.log(currentUser)
    }, []);




    return (
        <Navbar bg="light" expand="sm">
            <Navbar.Brand href="#home">oBay</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/register">
                        Register
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/products">
                        Products
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/addproduct">
                        Add Products
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/profile">
                        Profile
                    </Nav.Link>

                    {
                        currentUser ? <Form inline>
                            <Button variant="outline-success">Logout</Button>
                        </Form> : <Form inline>
                            <Button variant="outline-success">Login</Button>
                        </Form>
                    }

                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-success">Search products</Button>
                </Form>

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

export default connect(mapStateToProps, {getNumbers})(NavBar);
