import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import cap from "../../Assets/Projects/caption.png";
import weather from "../../Assets/Projects/weather.png";
import ges from "../../Assets/Projects/gesture.png";
import ttt from "../../Assets/Projects/tic-tac-toe.png";
import space from "../../Assets/Projects/space.png";
// import easyCode from "../../Assets/Projects/easy-code.png";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ges}
              isBlog={false}
              title="Hand Gesture Recognition"
              description="Developed a Hand Gesture Recognition System that allows users to draw gestures on a grid and automatically recognizes these gestures based on previously saved examples. The system uses a grid-based interface for gesture input and employs machine learning techniques to predict gestures by comparing the drawn gestures to stored templates. My role involved designing the grid interface, implementing gesture saving/loading functionalities, and integrating prediction algorithms. This project showcases my ability to build interactive applications and apply machine learning for real-time gesture recognition."
              link="https://github.com/tarunganesh2004/Gesture_Detector-master"
              liveLink=""
            />

          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easyCode}
              isBlog={false}
              title="easy-code"
              description="Easy code is my personal blog website which is build with nextjs. It has great support of the Markdown content. Easy-code is fully responsive blog website which has light and dark mode support."
              link="https://github.com/MohitSojitra/easy-code"
              liveLink="https://blog.mohitsojitra.tech/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cap}
              isBlog={false}
              title="Image Caption Generator"
              description="Developed an Image Captioning System that utilizes DenseNet201 for robust image feature extraction and LSTM for generating descriptive text sequences. The system processes user-uploaded images to produce coherent and contextually relevant captions. The project incorporates Flask to handle image uploads and display generated captions. DenseNet201 serves as the backbone for feature extraction, providing a rich representation of visual content, while LSTM models are trained to translate these features into natural language descriptions. The solution leverages Keras for model training, with Tokenizer for sequence management and NumPy for data processing. Secure file handling and preprocessing are managed through PIL, ensuring seamless user interaction and reliable performance."
              link="https://github.com/tarunganesh2004/Image-Captioning"
              liveLink=""
            />


          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Prediction Website"
              description="Designed a Weather Application to provide real-time weather information for cities worldwide. The app allows users to enter a city name and fetches weather data such as temperature, humidity, wind speed, and weather conditions using the OpenWeatherMap API. It features dynamic updates with weather icons reflecting current conditions and handles errors gracefully by displaying appropriate messages when an invalid city name is entered. The application includes a user-friendly interface with an input field, search button, and weather display section."
              link="https://github.com/tarunganesh2004/A-simple-Weather-app"
              liveLink="https://tarunganesh2004.github.io/A-simple-Weather-app/"
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ttt}
              isBlog={false}
              title="Tic-Tac-Toe Game"
              description='Developed a Tic-Tac-Toe game using Java and Swing, featuring a user-friendly graphical interface with a 3x3 grid of buttons. The game allows two players to take turns, marking spaces with "X" or "O". The system includes logic to detect win conditions, highlighting winning combinations and disabling further moves. The interface updates dynamically to indicate whose turn it is and announces the winner. This project involved designing interactive UI elements and implementing game rules to create an engaging and functional game experience.'
              link="https://github.com/tarunganesh2004/Tic-Tac-Toe"
              liveLink=""
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={space}
              isBlog={false}
              title="Space Invaders"
              description="Developed as a modern tribute to the classic arcade game, Space Invaders offers an exhilarating experience with upgraded graphics and gameplay. Players command a laser cannon to battle waves of descending aliens, navigating through increasingly challenging levels. With enhanced visuals, dynamic sound effects, and exciting power-ups, it combines nostalgia with fresh excitement for a new generation of gamers."
              link="https://github.com/tarunganesh2004/Space-Invaders"
              liveLink="https://space-invaders-ecru.vercel.app/"
            />

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
