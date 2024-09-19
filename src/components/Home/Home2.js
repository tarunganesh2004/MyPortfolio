import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import myImg from '../../Assets/Tarun.jpg'
import Tilt from 'react-parallax-tilt'
import {AiFillGithub, AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{fontSize: '2.6em'}}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Exploring the digital frontier, I'm committed to mastering both Full-Stack Development and AI/ML.
              <br />
              <br />
              My expertise spans
              <i>
                <b className="purple"> Python, Java, and JavaScript</b>
              </i>
              , which I use to build comprehensive solutions from front-end to back-end.
              <br />
              <br />
              I'm enthusiastic about
              <i>
                <b className="purple">
                  converting raw data into valuable insights
                </b>
              </i>
              and enjoy
              <i>
                <b className="purple">
                  pushing the boundaries of technology
                </b>
              </i>
              .
              <br />
              <br />

              Constantly exploring the synergy between
              <b className="purple"> AI, web technologies, and cloud solutions</b>
              .
              <br />
              <br />
              Ready to tackle data challenges and build innovative solutions? Let’s work together to create something extraordinary!
            </p>

            </Col>
            <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} style={{ height: '70vh' }} className="img-fluid" alt="avatar" />
            </Tilt>

            </Col>
            </Row>
            <Row>
            <Col md={12} className="home-about-social">
              <h1>LET'S CONNECT</h1>
              <p>
                Eager to <span className="purple">innovate </span>together?
              </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/tarunganesh2004"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tarunganesh2004/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
