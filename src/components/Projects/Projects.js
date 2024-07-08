import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import study from "../../Assets/Projects/StudyNotion login page.png"
import currency from "../../Assets/Projects/currency.png"
import weather from "../../Assets/Projects/weather.png"
import ytss from "../../Assets/Projects/Yt(ss).png"

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
          <Col md={9} lg={5} className="project-card">
            <ProjectCard
              imgPath={study}
             
              title="StudyNotion"
              description="Fully functional ED-TECH platform that enables users to create, consume and rate educational content."
              description2="Built using MERN Stack Technology."
              description3="A secure user authentication and authorization system, features like OTP (One-Time Password) and JWT (JSON Web Token) to enhance data protection and access control"
              ghLink="https://github.com/saqlain-shahid/StudyNotion.git"
              demoLink="https://saqlain-studynotion.vercel.app"
            />
          </Col>

          <Col md={9} lg={5} className="project-card">
            <ProjectCard
              imgPath={currency}
              
              title="Currency Convertor"
              description="Developed a currency converter web application using React.js, providing real-time exchange rate calculations."
              description2="Integrated external APIs to fetch and update currency exchange rates, ensuring accurate and up-to-date information."
              ghLink="https://github.com/saqlain-shahid/currency-converter.git"
              demoLink="https://saqlain-currencyconverter.vercel.app"
            />
          </Col>

          <Col md={9} lg={5} className="project-card">
            <ProjectCard
              imgPath={ytss}

              title="YouTube-Lite"
              description="Integrated cost-effective free YouTube API with 100/month usage limits, if the DATA is not showing that means API reached usage limits."
              description2="Developed a YouTube clone using React.js and integrated the YouTube API for real-time data."
              description3="Implemented key features including category sections (Home, Trending, Music, etc.), robust search
              functionality and a video player utilizing React Player."
              ghLink="https://github.com/saqlain-shahid/youtube-lite.git"
              demoLink="https://saqlain-youtube-lite.vercel.app"
            />
          </Col>

          <Col md={9} lg={5} className="project-card">
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
