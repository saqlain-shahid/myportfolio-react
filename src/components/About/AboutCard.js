import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saqlain Shahid </span>
            from <span className="purple"> Patna, Bihar.</span>
            <br />
            I am a <span className="purple">Fresher</span> and currently looking for an opportunity.
            <br />
            I am currently pursuing my <span className="purple">B.Tech</span> from <span className="purple">Corporate Intitute of Science & Technology (Bhopal).</span>
            <br />
            Currently I'm in my Final year [2020-2024].
            <br />
            My <span className="purple">CGPA - 8.1 (6th Semester)</span>
            <br/>
            <br/>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference in real life!"{" "}
          </p>
          <footer className="blockquote-footer">Saqlain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
