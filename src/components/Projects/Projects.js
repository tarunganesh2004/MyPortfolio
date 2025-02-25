import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import covid from "../../Assets/Projects/covid.png";
import cap from "../../Assets/Projects/caption.png";
import weather from "../../Assets/Projects/weather.png";
import ges from "../../Assets/Projects/gesture.png";
import ttt from "../../Assets/Projects/tic-tac-toe.png";
import space from "../../Assets/Projects/space.png";
import expenseTrackerImage from "../../Assets/Projects/expense.png"
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
              imgPath={covid}
              isBlog={false}
              title="Predictive Modelling For Epidemic Outbreaks"
              description="Implemented machine learning models to predict cumulative COVID-19 cases using historical data. The project involved data preprocessing, feature extraction, and building sophisticated models including Bidirectional LSTM, Transformer, and Bidirectional GRU. Achieved the highest accuracy with Bidirectional LSTM, evaluated using metrics like RMSE, MAE, MAPE, and R2 score. Visualized predictions and real instances through interactive plots. The project demonstrates expertise in predictive modeling, data analysis, and developing solutions to address public health challenges."
              link="https://github.com/tarunganesh2004/Predictive-Modeling-For-epidemic-outbreaks"
              liveLink=""
            />

          </Col>
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
              imgPath={expenseTrackerImage}
              isBlog={false}
              title="Personal Expense Tracker"
              description="Developed a Java-based Personal Expense Tracker application to help users manage and monitor their expenses efficiently. The application includes features for adding expenses with categories, amounts, and descriptions. Users can view a summarized report of their total expenses compared to their monthly budget and see a breakdown of expenses by category. Built using core Java concepts like OOP (Object-Oriented Programming) and implemented with a user-friendly Swing-based GUI, the application supports essential functionalities without relying on external libraries. Ideal for budgeting and personal finance management, the Expense Tracker offers a clean, interactive interface for users to track spending within defined limits."
              link="https://github.com/tarunganesh2004/Expense-Tracker-Using-OOPS"
              liveLink=""
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
