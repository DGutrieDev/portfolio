import "../styles/Technologies.css";
import { Fade } from "react-awesome-reveal";
import technologiesData from "../../Data/TechnologiesData";

function Technologies() {
  return (
    <div className="tech_container">
      <div className="title_section">
        <h1 className="tech_tittle">Technologies</h1>
      </div>
      <div className="content_section">
        {technologiesData.map((category, index) => (
          <div key={index} className="tech_card">
            <Fade cascade damping={0.5}>
              {category.items.map((tech, idx) => (
                <div key={idx} className="tecs" translate="no">
                  <i className={tech.icon}></i>
                  <p>{tech.name}</p>
                </div>
              ))}
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;