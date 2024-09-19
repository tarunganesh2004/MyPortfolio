import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiGithub,
} from "react-icons/si";
import {  IoLogoVercel } from "react-icons/io5";
import { FaFileExcel } from "react-icons/fa";
import { SiEclipseide } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileExcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col>
      
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNetlify/>
      </Col> */}
      
    </Row>
  );
}

export default Toolstack;
