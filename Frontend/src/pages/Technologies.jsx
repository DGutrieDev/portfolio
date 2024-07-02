import "../styles/Technologies.css";
import { Fade } from "react-awesome-reveal";

function Technologies() {
  return (
    <div className="tech_container">
      <div className="title_section">
        <h1 className="tech_tittle">Technologies</h1>
      </div>
      <div className="content_section">
        <div className="tech_card">
          <Fade cascade damping={0.5}>
            <div className="tecs" translate="no">
              <i className="bx bxl-java"></i>
              <p>Java</p>
            </div>
            <div className="tecs" translate="no">
              <i className="bx bxl-javascript"></i>
              <p>JavaScript</p>
            </div>
            <div className="tecs" translate="no">
              <i className="bx bxl-typescript"></i>
              <p>TypeScript</p>
            </div>
            <div className="tecs" translate="no">
              <i className="bx bxl-python"></i>
              <p>Python</p>
            </div>
            <div className="tecs" translate="no">
              <i className="bx bxl-php"></i>
              <p>PHP</p>
            </div>
          </Fade>
        </div>
        <div className="tech_card">
          <Fade cascade damping={0.5}>
            <div className="tecs" translate="no">
              <i className="bx bxl-html5"></i>
              <p>HTML</p>
            </div>
            <div className="tecs" translate="no">
              <i className="bx bxl-css3"></i>
              <p>CSS</p>
            </div>
            <div className="tecs" translate="no">
              <i className="bx bxl-react"></i>
              <p>React</p>
            </div>
            <div className="tecs" translate="no">
              <i className="fa-brands fa-node"></i>
              <p>Node JS</p>
            </div>
            <div className="tecs" translate="no">
              <i className="fa-brands fa-laravel"></i>
              <p>Laravel</p>
            </div>
          </Fade>
        </div>
        <div className="tech_card">
          <Fade cascade damping={0.5}>
            <div className="tecs" translate="no">
              <i className="bx bxl-tailwind-css"></i>
              <p>Tailwind</p>
            </div>
            <div className="tecs" translate="no">
              <i className="bx bxl-bootstrap"></i>
              <p>Bootstrap</p>
            </div>
            <div className="tecs" translate="no">
              <i className="bx bxl-github"></i>
              <p>Github</p>
            </div>
            <div className="tecs" translate="no">
              <i className="bx bxl-git"></i>
              <p>Git</p>
            </div>
            <div className="tecs" translate="no">
              <i className="fa-solid fa-database"></i>
              <p>MySQL</p>
            </div>
          </Fade>
        </div>
        <div className="tech_card">
          <Fade cascade damping={0.5}>
            <div className="tecs" translate="no">
              <i className="fa-solid fa-database"></i>
              <p>SQL Server</p>
            </div>
            <div className="tecs" translate="no">
              <i className="fa-brands fa-node-js"></i>
              <p>Next JS</p>
            </div>
            <div className="tecs" translate="no">
              <i className="fa-brands fa-node-js"></i>
              <p>Express JS</p>
            </div>
            <div className="tecs" translate="no">
              <i className="fa-brands fa-npm"></i>
              <p>NPM</p>
            </div>
            <div className="tecs" translate="no">
              <i className="fa-solid fa-mobile"></i>
              <p>Ionic</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
