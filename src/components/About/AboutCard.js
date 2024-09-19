import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaLaptopCode } from 'react-icons/fa';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify', fontSize: '1.1em' }}>
            Hello! I'm <span className="purple">Tarun Ganesh</span>, from <span className="purple">Andhra Pradesh, India</span>.
            <br /><br />
            <FaLaptopCode className="about-icon" /> By day, I'm a <span className="purple">Full-Stack Developer</span> and <span className="purple">AI/ML Enthusiast</span>,
            crafting solutions from the front-end to the back-end and building smart algorithms.
            <br /><br />
            Outside of work, I explore new technologies and enjoy tackling unique challenges to push my boundaries.
          </p>

          <p style={{
            marginBlockEnd: 0,
            color: 'rgb(155 126 172)',
            fontStyle: 'italic',
            fontSize: '1.2em',
            borderLeft: '4px solid rgb(155 126 172)',
            paddingLeft: '10px'
          }}>
            "Success is measured by the impact you make, not the hours you put in."
          </p>


          
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard;