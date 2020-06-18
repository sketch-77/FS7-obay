import React, { Component } from "react";
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
      <Container>
        <a>
          <Row xs={2} md={4} lg={6}>
            <Col>{/* <h1>Happy Shopping!</h1> */}</Col>
          </Row>
        </a>
        <a>
          <Image
            src="/homepage.svg"
            height="450"
            fluid
            className="d-inline-block align-center"
            alt="AfriKbay-logo"
          />
        </a>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/sliderThree.svg"
              Width="400"
              text="First slide&bg=282c34"
              alt="Made in Kenya"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/sliderTwo.svg"
              height="400"
              text="Second slide&bg=282c34"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/sliderrOne.svg"
              height="400"
              text="Second slide&bg=282c34"
              alt="Second slide"
            />

            {/* <Carousel.Caption>
              <h3>AfriKa for AfriKa!</h3>
              <p>
                We specialise in products made exclusively in AfriKa. Supporting
                our local talent and promoting the intrinsic qualities borne of
                so much culture and history. Support Africa today!
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
        <a>
          {/* <Image src="holder.js/100px250" fluid /> */}
          <Image
            src="/HeaderOne-8.png"
            height="450"
            fluid
            className="d-inline-block align-center"
            alt="AfriKbay-logo"
          />
        </a>
        <a>
          <Image
            src="/footer.svg"
            height="450"
            fluid
            className="d-inline-block align-center"
            alt="AfriKbay-logo"
          />
          {/* <Card>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Img
            src="/footer.svg"
            height="450"
            className="d-inline-block align"
            </Card.Img>
            </Card.Body>
          </Card> */}
        </a>
      </Container>
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
