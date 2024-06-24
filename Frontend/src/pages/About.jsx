import React from "react";
import "../styles/About.css";
import About_me from "../assets/About_image.png";
import { Slide, Fade } from "react-awesome-reveal";

function About() {
  return (
    <div className="about_container">
      <div className="about_content">
        <div className="about_info">
          <Slide>
            <h1>About Me</h1>
          </Slide>
          <div className="text">
            <Fade>
              <p>
                Hello! I'm Denny Gutrie, a technology enthusiast with a
                particular focus on web development. From an early age, I've
                been fascinated by how technology can transform and improve our
                daily lives. My love for soccer and video games has been a
                constant source of inspiration, teaching me the importance of
                teamwork, strategy, and perseverance qualities that I apply in
                my professional life.
              </p>
              <p>
                In the field of web development, I excel at creating robust and
                efficient web systems. I have a solid understanding of various
                programming languages, such as HTML, CSS, and JavaScript, and
                frameworks like React and Angular, which enable me to build
                intuitive and dynamic user interfaces. Additionally, my
                experience with backend development in Node.js and Laravel and
                databases like MySQL allows me to develop comprehensive and
                well-integrated solutions
              </p>
              <p>
                I am always looking for new challenges and opportunities to
                apply my skills and knowledge to innovative projects. If you
                share my passion for technology and web development, I would
                love to connect and collaborate.
              </p>
              <p>
                Thanks for visiting my portfolio! Feel free to explore my
                projects and contact me if you have any questions or would like
                to work together!
              </p>
            </Fade>
          </div>
        </div>
        <div className="image">
          <Slide direction="right">
            <img src={About_me} alt="About Me" className="about_image"/>
          </Slide>
        </div>
      </div>
      <div className="credits">
        <p>Designed and Developed by Denny Gutrie</p>
      </div>
    </div>
  );
}

export default About;
