import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footer">
      <Container className="g-0">
        <Row className="text-white my-5">
          <Col lg={6} className="footer-main">
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </Col>
          <Col lg={2}>
            <p>
              <b>Products</b>
            </p>
            <p>Web Studio</p>
            <p>DynamicBox Flex</p>
            <p>Programming Forms</p>
          </Col>
          <Col lg={2}>
            <p>
              <b>Resources</b>
            </p>
            <p>Nostrud exercitation</p>
            <p>Visual mockups</p>
            <p>Nostrud exercitation</p>
            <p>Visual mockups</p>
            <p>Nostrud exercitation</p>
          </Col>
          <Col lg={2}>
            <p>
              <b>Company</b>
            </p>
            <p>Consectetur adipiscing</p>
            <p>Labore et dolore</p>
            <p>Consectetur adipiscing</p>
            <p>Labore et dolore</p>
            <p>Consectetur adipiscing</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
