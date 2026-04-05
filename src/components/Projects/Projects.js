import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// 👉 Add your own images inside Assets/Projects
import docify from "../../Assets/Projects/docify.png";
import urlshortener from "../../Assets/Projects/urlshortener.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some of the projects I have built.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docify}
              isBlog={false}
              title="Docify - Telemedicine App"
              description="A full stack telemedicine platform where users can book doctor appointments, chat with doctors, and order medicines. Built using React.js and Spring Boot."
              ghLink="https://github.com/SehwagLK/Docify---Medical-Webconsultation-"
              
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urlshortener}
              isBlog={false}
              title="URL - Shortener"
              description="A web application that converts long URLs into short links with unique codes and redirection support, built using a full-stack approach with tracking features."
              ghLink="https://github.com/SehwagLK/url-shortener"
              
            />
          </Col>

          {/* Project 3 */}


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;