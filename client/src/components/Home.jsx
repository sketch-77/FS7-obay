import React, { Component } from "react";
import "../App.css";
import { withRouter } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

class Home extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-md-center">
          <Col>
            <Image
              src="/homepage.svg"
              height="1200"
              fluid
              className="d-inline-block align-center"
              alt="AfriKbay-logo"
            />
          </Col>
        </Row>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Asset3.png"
              Width="400"
              text="First slide&bg=282c34"
              alt="Made in Kenya"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Asset3.png"
              Width="400"
              text="First slide&bg=282c34"
              alt="Made in Kenya"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Asset3.png"
              Width="400"
              text="First slide&bg=282c34"
              alt="Made in Kenya"
            />
          </Carousel.Item>
        </Carousel>
        <div className="comments">
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </div>

        <Row className="justify-content-md-center">
          <Col>
            <Image
              src="/comments.png"
              height="450"
              fluid
              className="d-inline-block align-center"
              alt="AfriKbay-logo"
            />
          </Col>
        </Row>
      </div>
    );
  }
}
export default withRouter(Home);

{
  /* <Carousel.Caption>
  <h3>AfriKa for AfriKa!</h3>
  <p>
    We specialise in products made exclusively in AfriKa. Supporting our local
    talent and promoting the intrinsic qualities borne of so much culture and
    history. Support Africa today!
  </p>
</Carousel.Caption>; */
  {
    /* <Row xs={2} md={4} lg={6}>
          <Col>
            <h1>This is the home</h1>
          </Col>
        </Row>
        <Card>
          <Card.Body>
            <Button variant="primary" type="button" onClick={this.handleLogin}>
              Log in
            </Button>
          </Card.Body>
        </Card> */
  }
}
