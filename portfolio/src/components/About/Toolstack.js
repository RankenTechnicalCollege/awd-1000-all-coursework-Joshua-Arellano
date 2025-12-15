import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/unchromium.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import arch from "../../Assets/TechIcons/arch.svg";
import github from "../../Assets/TechIcons/github.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={arch} alt="arch" className="tech-icon-images" />
        <div className="tech-icons-text">Arch Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">UnGoogled Chromium</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Code OSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={github} alt="github" className="tech-icon-images" />
        <div className="tech-icons-text">Github</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
