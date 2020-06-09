import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Form from "react-bootstrap/Flexbox";
// import Card from "react-bootstrap/Card";

// import { connect } from "react-redux";
// import Login from "./components/Login";
// import axios from "axios";

class Profile extends Component {
  render() {
    return <div>You are now logged in!</div>;
  }
}

export default Profile;
//   constructor(props) {
//     super(props);
//     this.state = {
//       //   firstName: "",
//       //   lastName: "",
//       //   email: "",
//       //   password: "",
//       user: [],
//     };
//   }

//   async componentDidMount() {
//     fetch("/profile")
//       .then((response) => response.json())
//       .then((user) => this.setState({ user }));
//   }

//   render() {
//     // // const { firstName, lastName, email, password } = this.state;
//     return (
//       <div>
//         <div className="container fluid">
//           <h3>Profile</h3>
//           {this.state.user.id}

{
  /* <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card> */
}
//         </div>
//       </div>
//     );
//   }
// }

// export default withRouter(Profile);
// export default connect(null, Login)(Profile);
