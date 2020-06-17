import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
class Home extends Component {
  render() {
    return
    <div>Welcome Home!</div>
    <Container>
        <Row xs={2} md={4} lg={6}>
          <Col>
            {" "}
            <h1>Login</h1>
          </Col>
        </Row>

        <Card>
          <Card.Body></Card.Body>
          </Card.Body>
        </Card>
      </Container>
  }
}

export default withRouter(Home);
