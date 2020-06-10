import React from "react";
import "../App.css";
// import Form from "react-bootstrap/Form";
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
      // lastName: "",
      // email: "",
      // password: "",
      user: [],
    };
  }

  async componentDidMount() {
    fetch("/users/profile")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        console.log("***THIS IS MY USER ****");
        this.setState({ user: json.user });
      })
      .catch((error) => {});
  }

  render() {
    // const { firstName, lastName, email, password } = this.state;
    return (
      <div>
        <h3>Welcome back! You logged in as {this.state.user.firstName}</h3>

        <button>Show Listed Products</button>
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
