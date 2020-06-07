import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Protected extends Component {

    render() {
        return (
            <Card>
                <Card.Text>Protected page</Card.Text>
            </Card>
        );
    }
}

export default Protected;