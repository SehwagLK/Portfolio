import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Veer Sehwag LK</span>{" "}
            from <span className="purple">Madurai, India</span>.
            <br />
            I’m a{" "}
            <span className="purple">Computer Science Engineering student</span>{" "}
            and a passionate{" "}
            <span className="purple">Full Stack Developer</span>.
            <br />
            I build modern web applications using{" "}
            <span className="purple">React.js</span> and{" "}
            <span className="purple">Spring Boot</span>.
            <br />
            <br />
            I have worked on projects like:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Docify – Telemedicine Web App 🏥
            </li>
            <li className="about-activity">
              <ImPointRight /> URL Shortener -  Smart Links 🔗
            </li>

          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I love building scalable applications and solving real-world problems!"
          </p>
          <footer className="blockquote-footer">Veer Sehwag LK</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;