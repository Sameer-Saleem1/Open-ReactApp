import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import social from "../assets/img/social.jpg";

import logo from "../assets/img/logo.jpg";

export default function Footer() {
  return (
    <div className="footer">
      <Container className="g-0">
        <Row className="text-white my-5">
          <Col lg={6} className="footer-sections footer-main">
            <Image src={logo} />
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </Col>
          <Col className="footer-sections" lg={2}>
            <p>
              <b>Products</b>
            </p>
            <p>Web Studio</p>
            <p>DynamicBox Flex</p>
            <p>Programming Forms</p>
          </Col>
          <Col className="footer-sections" lg={2}>
            <p>
              <b>Resources</b>
            </p>
            <p>Nostrud exercitation</p>
            <p>Visual mockups</p>
            <p>Nostrud exercitation</p>
            <p>Visual mockups</p>
            <p>Nostrud exercitation</p>
          </Col>
          <Col className="footer-sections" lg={2}>
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
      <div>
        <Container className="mb-2">
          <Row>
            <Col sm={12} md={12} lg={6} className="footer-bottom-left">
              © Cruip.com. All rights reserved.
            </Col>
            <Col sm={12} md={12} lg={6} className="footer-bottom-right">
              <Image src={social} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
