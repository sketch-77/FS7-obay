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
      <div className="auth-wrapper">
        <div className="mb-5"></div>
        <Row className="justify-content-md-center">
          <Col>
            <Image
              src="/Asset6.png"
              height="740"
              className="d-inline-block align-center"
              alt="AfriKbay-logo"
            />
          </Col>
        </Row>

        <div className="auth-wrapper">
          <div className="mb-5">
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
                  src="/Asset2.png"
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
          </div>
        </div>

        <div className="comments">
          <Card>
            <Card.Body>Our community feedback!</Card.Body>
          </Card>
        </div>

        <Row className="justify-content-md-center">
          <Col>
            <Image
              src="/Asset1.png"
              height="450"
              fluid
              className="d-inline-block align-center"
              alt="AfriKbay-logo"
            />
          </Col>
        </Row>

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
