import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />

      {/* Title */}
      <h1 className="project-heading" style={{ textAlign: "center" }}>
        My <strong className="purple">Resume</strong>
      </h1>

      {/* 🔥 Download Button Top */}
      <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
        <a href="/resume.pdf" download>
          <Button variant="info" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload /> &nbsp;Download Resume
          </Button>
        </a>
      </Row>

      {/* 🔥 PDF Viewer */}
      <Row className="resume" style={{ justifyContent: "center" }}>
        <Document file="/resume.pdf">
          <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.6} />
        </Document>
      </Row>

      {/* 🔥 Download Button Bottom */}
      <Row style={{ justifyContent: "center", marginTop: "20px" }}>
        <a href="/resume.pdf" download>
          <Button variant="info" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload /> &nbsp;Download Resume
          </Button>
        </a>
      </Row>
    </Container>
  );
}

export default ResumeNew;