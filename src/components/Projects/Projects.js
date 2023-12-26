import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import study from "../../Assets/Projects/StudyNotion login page.png"
import currency from "../../Assets/Projects/currency.png"
import weather from "../../Assets/Projects/weather.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={study}
             
              title="StudyNotion"
              description="Fully functional ED-TECH platform that enables users to create, consume and rate educational content."
              description2="Built using MERN Stack Technology."
              description3="By the use of local storage, managed to reduce the API calls upto 30% and improving overall performance upto 20%"
              ghLink="https://github.com/saqlain-shahid/StudyNotion.git"
              // demoLink="https:/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              
              title="Currency Convertor"
              description="Developed a currency converter web application using React.js, providing real-time exchange rate calculations."
              description2="Integrated external APIs to fetch and update currency exchange rates, ensuring accurate and up-to-date information."
              ghLink="https://github.com/saqlain-shahid/currencyConvertor.git"
              demoLink="https://saqlain-currencyconvertor.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
            
              title="Weather Web App"
              description="An enhanced user satisfaction by delivering up-to-date and accurate weather information."
              description2="Implemented data parsing, API request handling and user interface components."
              ghLink="https://github.com/saqlain-shahid/WeatherApp.git"
              demoLink="https://saqlain-weatherapp.netlify.app"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={}
              isBlog={false}
              title=""
              description=""
              ghLink="https://github.com/"
              demoLink="https://"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={}
              isBlog={false}
              title=""
              description=""
              ghLink="https://github.com/"
              // demoLink="https://" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={}
              isBlog={false}
              title=""
              description=""
              ghLink="https://github.com/"
              // demoLink="https://"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
