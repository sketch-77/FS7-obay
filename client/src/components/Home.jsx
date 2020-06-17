import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
class Home extends Component {
  render() {
    return (
      <Container>
        <Row xs={2} md={4} lg={6}>
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
        </Card>
      </Container>
    );
  }
}
export default withRouter(Home);
