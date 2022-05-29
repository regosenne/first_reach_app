import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
    return (
        <Container className="h-100">
            <Row>
                <Col xs={2} />
                <Col xs={8} className="mt-4">
                    <h1 className="display-4">About the Project</h1>
                    <hr style={{ width: "10rem" }} />
                    <p className="text-left mt-3">Under a Vickrey auction, who will win the auction, and what will the price paid for the 
                    antique be? Individual A will win the auction due to his highest bid of $103 for example. However, Individual A does not pay the 
                    highest bid price – he pays the second-highest bid price.</p>
                </Col>
                <Col xs={2} />
            </Row>
        </Container>
    );
}

export default About;