import React from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
// import Form from "react-bootstrap/Flexbox";
// import Card from "react-bootstrap/Card";

// import { connect } from "react-redux";
// import Login from "./components/Login";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "********",
            user: this.getCurrentUser(),
        };
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
        ;
    }

    // async componentDidMount() {
    //   fetch("/users/profile")
    //     .then((res) => res.json())
    //     .then((json) => {
    //       console.log(json);
    //       console.log("***THIS IS MY USER ****");
    //       this.setState({ user: json.user });
    //     })
    //     .catch((error) => {});
    // }

    render() {
        const { firstName, lastName, email, password } = this.state.user;
        return (
            <div>
                <h1 style={{color: "white", "text-align": "center"}}>Welcome back! You logged in as {firstName}</h1>
                <hr/>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Form>
                            <Form.Group as={Row} controlId="formPlaintextName">
                                <Form.Label column sm="4">
                                    First Name
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" placeholder={firstName} readOnly />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextName">
                                <Form.Label column sm="4">
                                    Last Name
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" placeholder={lastName} readOnly />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextName">
                                <Form.Label column sm="4">
                                    Email
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" placeholder={email} readOnly />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextName">
                                <Form.Label column sm="4">
                                    Password
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" placeholder="******" readOnly />
                                </Col>
                            </Form.Group>
                        </Form>
                        <button>Show Listed Products</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Profile;

//   database = [
//   {
//     id: 1,
//     firstName: "test",
//     lastName: "test",
//     email: "test3@test.com",
//   },
// ];
// onLogin =()=>{
//   const formData = new FormData();

//   formData.append(
//     "userId",
//     this.state.profile,
//     this.state.profile.users
//   );

//   axios
//   .get("/profile", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   })
//   .then((res) =< console.log(res));
// };
