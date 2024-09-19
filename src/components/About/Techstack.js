import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {CgCPlusPlus} from 'react-icons/cg'
import { FaPhp } from "react-icons/fa";
import {FaJava } from 'react-icons/fa'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  // DiMongodb,
  DiPython,
  // DiGit,
  DiMysql
} from 'react-icons/di'
import {
  SiDart,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiExpress

} from 'react-icons/si'

function Techstack() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPhp />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMysql/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
    </Row>
  )
}

export default Techstack
