import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import Techstack from "../About/Techstack";
import Github from "../About/Github";

import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">Hi There! 👋🏻</h1>

              <h1 className="heading-name">
                I'M <strong className="main-name">SEHWAG LK</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5}>
              <img
                src={homeLogo}
                alt="home"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
      <Techstack />
      <Github />

      <Container>
        <Row style={{ padding: "50px 0" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>

            <ul className="home-about-social-links">
              <li>
                <a href="https://github.com/SehwagLK" target="_blank" rel="noreferrer">
                  <AiFillGithub />
                </a>
              </li>

              <li>
                <a href="https://linkedin.com/in/veer-sehwag-lk-1842072b8/" target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
              </li>

              <li>
                <a href="https://instagram.com/sehwag_lk" target="_blank" rel="noreferrer">
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;