import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myphoto.jpg"; // 🔥 use your photo here
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m <b className="purple">Sehwag LK</b>, a passionate{" "}
              <b className="purple">Computer Science Engineering student</b>{" "}
              from Madurai, India.
              <br />
              <br />
              I love building modern and scalable web applications using{" "}
              <i>
                <b className="purple">
                  React.js, Spring Boot, JavaScript, and Java
                </b>
              </i>.
              <br />
              <br />
              My main focus is on developing real-world solutions like{" "}
              <i>
                <b className="purple">
                  Telemedicine platforms, AI-based applications, and management systems
                </b>
              </i>.
              <br />
              <br />
              I have built projects like{" "}
              <b className="purple">Docify (Telemedicine App)</b>,{" "}
              <b className="purple">URLShortener (AI Image Generator)</b>, and{" "}
             
              <br />
              <br />
              I enjoy solving problems, improving UI/UX, and continuously
              learning new technologies to become a better developer 🚀.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Sehwag LK"
                style={{
                  borderRadius: "50%",
                  border: "3px solid #38bdf8",
                  boxShadow: "0 0 20px rgba(56,189,248,0.5)"
                }}
              />
            </Tilt>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Home2;