import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Weather App"
              description="Weather app built with React.js and utilizes OpenWeatherMap's API to fetch information of typed input location, then display onto the user's screen."
              ghLink="https://github.com/Joshua-Arellano/Joshua-Arellano-weather-app.github.io"
              demoLink="https://weather-app-demo-link.com"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
