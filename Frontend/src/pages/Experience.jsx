import React from "react";
import { Slide, Fade } from "react-awesome-reveal";
import "../styles/Experience.css";
import experienceData from "../../Data/ExperienceData"; 

function Experience() {
  return (
    <div className="experience_container">
      <div className="experience_content">
        <div className="experience_title">
          <Slide>
            <h1>Professional Experience</h1>
          </Slide>
        </div>
        <div className="experience_details">
          {experienceData.map((exp, index) => (
            <Fade key={index}>
              <div className="experience_card">
                <h2>{exp.title}</h2>
                <p className="company_name">{exp.company}</p>
                <p className="position_date">{exp.positionDate}</p>
                <p>{exp.description}</p>
                <ul className="achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;

