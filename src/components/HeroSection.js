import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import projects from "../assets/img/projects.jpg";
import video1 from "../assets/img/video.mp4";
import icon1 from "../assets/img/icon-1.jpg";
import icon2 from "../assets/img/icon-2.jpg";
import icon3 from "../assets/img/icon-3.jpg";
import icon4 from "../assets/img/icon-4.jpg";
import icon5 from "../assets/img/icon-5.jpg";
import icon6 from "../assets/img/icon-6.jpg";

export default function HeroSection() {
  return (
    <div className="HeroSection ">
      <h1 className="">Landing template for startups</h1>
      <h3>
        Our landing page template works on all devices, so you only have to set
        it up once,
        <br /> and get beautiful results forever.
      </h3>

      <Button variant="primary" className="m-2">
        Start Free Trial
      </Button>
      <Button variant="secondary">Learn More</Button>
      <div>
        <video
          src={video1}
          controls="controls"
          autoplay="false"
          className="video"
        />
      </div>
      <h1>
        The majority our customers do not <br /> understand their workflows.
      </h1>
      <h3>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt <br />
        mollit anim id est laborum.
      </h3>

      <Container className=" my-5 gx-4">
        {" "}
        <Row>
          <Col className="mt-2" md={6} sm={6} lg={4}>
            <Image src={icon1} />
            <h2 className="table-heading">Instant Features</h2>
            <h6 className="table-h4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </h6>
          </Col>
          <Col className="mt-2" md={6} sm={6} lg={4}>
            <Image src={icon2} />
            <h2 className="table-heading">Instant Features</h2>
            <h6 className="table-h4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </h6>
          </Col>
          <Col className="mt-2" md={6} sm={6} lg={4}>
            <Image src={icon3} />
            <h2 className="table-heading">Instant Features</h2>
            <h6 className="table-h4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </h6>
          </Col>
          <Col className="mt-2" md={6} sm={6} lg={4}>
            <Image src={icon4} />
            <h2 className="table-heading">Instant Features</h2>
            <h6 className="table-h4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </h6>
          </Col>
          <Col className="mt-2" md={6} sm={6} lg={4}>
            <Image src={icon5} />
            <h2 className="table-heading">Instant Features</h2>
            <h6 className="table-h4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </h6>
          </Col>
          <Col className="mt-2" md={6} sm={6} lg={4}>
            <Image src={icon6} />
            <h2 className="table-heading">Instant Features</h2>
            <h6 className="table-h4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </h6>
          </Col>
        </Row>
      </Container>
      <hr style={{ color: "white" }} />
      <div className="my-5">
        <Button variant="success" className="goals-btn">
          REACH GOALS THAT MATTER
        </Button>
        <h1 className="mt-3">One product, unlimited solutions</h1>
        <h3>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt
          <br /> mollit laborum — semper quis lectus nulla.
        </h3>
        <Container className="text-white mt-5">
          <Row>
            <Col lg={7} sm={12} className="left-col">
              <p>
                <i>More speed. Less spend</i>
              </p>
              <h2>Keep projects on schedule</h2>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h4>

              <div className="m-3">
                <h6>Duis aute irure dolor in reprehenderit</h6>
                <h6>Excepteur sint occaecat</h6>
                <h6>Amet consectetur adipiscing elit</h6>
              </div>
            </Col>
            <Col lg={5} sm={12}>
              <Image className="projects" src={projects} />
            </Col>
          </Row>
        </Container>

        <Container className="text-white mt-5">
          <Row>
            <Col lg={7} sm={12} className="left-col">
              <p>
                <i>More speed. Less spend</i>
              </p>
              <h2>Keep projects on schedule</h2>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h4>

              <div className="m-3">
                <h6>Duis aute irure dolor in reprehenderit</h6>
                <h6>Excepteur sint occaecat</h6>
                <h6>Amet consectetur adipiscing elit</h6>
              </div>
            </Col>
            <Col lg={5} sm={12}>
              <Image className="projects" src={projects} />
            </Col>
          </Row>
        </Container>
      </div>
      <hr className="my-5" />
      <div className="cards-container">
        <h1 className="">Don't take our word for it</h1>
        <h3>
          Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper
          quis lectus <br />
          nulla at volutpat diam ut venenatis tellus—in ornare.
        </h3>
        <Container className="my-5 g-0 r">
          <Row>
            <Col lg={4} className="card-outer-container">
              {" "}
              <Card style={{ backgroundColor: "transparent" }}>
                <Card.Body className="card-body">
                  <Card.Text>
                    <p className="card-main-text">
                      — Open PRO lets me quickly get the insights I care about
                      so that I can focus on my productive work. I've had Open
                      PRO for about 24 hours now and I honestly don't know how I
                      functioned without it before.
                    </p>
                  </Card.Text>
                  <hr style={{ color: "white" }} />
                  <Card.Text className="card-secondary-text">
                    Anastasia Dan -{" "}
                    <span style={{ color: "#3c51ff" }}>UX Board</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="card-outer-container">
              {" "}
              <Card
                style={{
                  backgroundColor: "transparent",
                }}
              >
                <Card.Body className="card-body">
                  <Card.Text>
                    <p className="card-main-text">
                      — Open PRO lets me quickly get the insights I care about
                      so that I can focus on my productive work. I've had Open
                      PRO for about 24 hours now and I honestly don't know how I
                      functioned without it before.
                    </p>
                  </Card.Text>
                  <hr style={{ color: "white" }} />
                  <Card.Text className="card-secondary-text">
                    Anastasia Dan -{" "}
                    <span style={{ color: "#3c51ff" }}>UX Board</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="card-outer-container">
              {" "}
              <Card
                style={{
                  backgroundColor: "transparent",
                }}
              >
                <Card.Body className="card-body">
                  <Card.Text>
                    <p className="card-main-text">
                      — Open PRO lets me quickly get the insights I care about
                      so that I can focus on my productive work. I've had Open
                      PRO for about 24 hours now and I honestly don't know how I
                      functioned without it before.
                    </p>
                  </Card.Text>
                  <hr style={{ color: "white" }} />
                  <Card.Text className="card-secondary-text">
                    Anastasia Dan -{" "}
                    <span style={{ color: "#3c51ff" }}>UX Board</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="my-5"
        style={{
          backgroundColor: "#5d5dff",
          padding: "2rem 1rem",
        }}
      >
        <Container>
          <Row>
            <Col className="text-white" style={{ textAlign: "left" }}>
              <h2>Stay in the loop</h2>
              <h6 style={{ fontWeight: "400" }}>
                Join our newsletter to get top news before anyone else.
              </h6>
            </Col>
            <Col>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1rem",
                }}
              >
                <input placeholder="Your best email..."></input>
                <Button variant="light" className="subscribe-btn">
                  Subscribe
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
