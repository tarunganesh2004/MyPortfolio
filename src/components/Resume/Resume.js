import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
// @ts-ignore
import pdf from "../../Assets/TGResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { FaBriefcase, FaGraduationCap, FaTrophy } from "react-icons/fa";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "30px" }}>
          <Button variant="primary" href={pdf} target="_blank" className="download-button">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-column">
            <h3 className="resume-title"><FaBriefcase />  Experience</h3>
            <Resumecontent
              title="AI-ML Externship(SmartBridge)"
              date="Sep 2023- Dec 2023"
              content={[
                "Gained comprehensive knowledge of machine learning algorithms and deep learning concepts, including ANN, CNN, and RNN, through self - study and hands on experimentation, applying these techniques to solve real - world problems.",
                "Completed an image captioning project using Flask, leveraging practical implementation skills to successfully integrate image recognition models, achieving 85 % accuracy.",
              ]}
            />
            <Resumecontent
              title="Data Analyst(InTrainTech)"
              date="Oct 2023 - Nov 2023"
              content={[
                "Acquired skills in Power BI, Excel, SQL, and Python to improve data management and create visualizations, enhancing my ability to handle and analyze information effectively.",
                "Executed data cleaning, manipulation, and statistical analysis, creating dashboards that streamlined reporting and informed strategic decisions.",
                "Produced an in-depth COVID-19 tracker analysis project with Power BI and Advanced Excel; delivered 15+ data visualizations and insights, driving more informed pandemic response strategies and improving data transparency for stakeholders.",
              ]}
            />
            <Row className="resume">
            <h3 className="resume-title"><FaGraduationCap /> Certifications & Achievements</h3>
            <Resumecontent
              title=""
              content={[
                <a href="https://drive.google.com/file/d/1C7SW7lncso7zf8QY2ycjR6hPCI4I925i" target="_blank" rel="noopener noreferrer">
                  Google Developers SmartBridge AI-ML Certification
                </a>
              ]}
            />
            <Resumecontent
              title=""
              content={[
                <a href="https://drive.google.com/file/d/1MPdMDAN1Pu2ECowlR29erR0D57hMMfVC">
                  Completed NERD+ (DSA using Java) certification
                </a>
              ]}
            />
            <Resumecontent
              title=""
              content={[
                <a href="https://drive.google.com/file/d/19FtLlcIV-VhKGT57G5cy5B7WRL6oNgi-/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  Completed a Front-End Course in Udemy
                </a>
              ]}
              />
              <Resumecontent
                title=""
                content={[
                  <a href="https://www.hackerrank.com/profile/tarun_21bce8974" target="_blank" rel="noopener noreferrer">
                    Achieved 5-star rating in Java and Python in Hackerrank
                  </a>
                ]}
              />
            </Row>
          </Col>
          <Col md={6} className="resume-column">
            <h3 className="resume-title"><FaGraduationCap /> Education</h3>
            <Resumecontent
              title="VIT AP University"
              date="Dec 2021 - May 2025"
              content={[
                "Developed a strong foundation in computer science while specializing in the dynamic field of Artificial Intelligence and Machine Learning. Acquired comprehensive knowledge and practical skills in areas such as machine learning, deep learning, and natural language processing",
                "CGPA: 8.89/10",
              ]}
            />
            
            {/* <h3 className="resume-title"><FaTrophy /> Achievements & Publications</h3> */}
            <Resumecontent
              title="Sri Chaitanya College"
              date="Mar 2019 - Aug 2021"
              content={[
                "Completed my secondary school education , where I focused on Maths, Physics and Chemistry. This educational background provided me with a strong foundation for my future studies and career pursuits.",
                "Marks: 973/1000",
                "Achievements: Got 576 rank in AP-EAMCET, also achieved 25000 rank across all over the India in IIT JEE Mains"
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "30px" }}>
          <Button variant="primary" href={pdf} target="_blank" className="download-button">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
