import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card
      className="project-card-view"
      style={{
        background: "#1e293b",
        color: "white",
        borderRadius: "15px",
        boxShadow: "0 0 15px rgba(0,0,0,0.3)",
        transition: "0.3s",
      }}
    >
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="project"
        style={{
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          height: "200px",
          objectFit: "cover",
        }}
      />

      <Card.Body>
        <Card.Title style={{ fontWeight: "600", fontSize: "1.2rem" }}>
          {props.title}
        </Card.Title>

        <Card.Text style={{ textAlign: "justify", fontSize: "0.9rem" }}>
          {props.description}
        </Card.Text>

        {/* GitHub Button */}
        <Button
          variant="outline-info"
          href={props.ghLink}
          target="_blank"
          style={{ marginRight: "10px" }}
        >
          <BsGithub /> {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {/* Live Demo Button */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="info"
            href={props.demoLink}
            target="_blank"
          >
            <CgWebsite /> Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;