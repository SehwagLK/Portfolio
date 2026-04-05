import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaReact, FaJava, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiMysql, SiJavascript } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaReact size={40} />
        <div className="tech-icons-text">React.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript size={40} />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaJava size={40} />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot size={40} />
        <div className="tech-icons-text">Spring Boot</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb size={40} />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql size={40} />
        <div className="tech-icons-text">MySQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt size={40} />
        <div className="tech-icons-text">Git</div>
      </Col>

    </Row>
  );
}

export default Techstack;