import React from "react";
import "../styles/Technologies.css";
import { Fade } from "react-awesome-reveal";

function Technologies() {
  return (
    <div className="tech_container">
      <div className="title_section">
        <h1>Technologies</h1>
      </div>
      <div className="content_section">
        <Fade delay={500}>
          <div className="tecs" translate="no">
            <i class="bx bxl-java"></i>
            <p>Java</p>
          </div>
          <div className="tecs" translate="no">
            <i class="bx bxl-javascript"></i>
            <p>JavaScript</p>
          </div>
          <div className="tecs" translate="no">
            <i class="bx bxl-typescript"></i>
            <p>TypeScript</p>
          </div>
          <div className="tecs" translate="no">
            <i class="bx bxl-python"></i>
            <p>Python</p>
          </div>
          <div className="tecs" translate="no">
            <i class="bx bxl-php"></i>
            <p>PHP</p>
          </div>
          <div className="tecs" translate="no">
            <i class="bx bxl-html5"></i>
            <p>HTML</p>
          </div>
          <div className="tecs" translate="no">
            <i class="bx bxl-css3"></i>
            <p>CSS</p>
          </div>
          <div className="tecs" translate="no">
            <i class="bx bxl-react"></i>
            <p>React</p>
          </div>
          <div className="tecs" translate="no">
            <i class="fa-brands fa-node"></i>
            <p>Node JS</p>
          </div>
          <div className="tecs" translate="no">
            <i class="fa-brands fa-laravel"></i>
            <p>Laravel</p>
          </div>
          <div className="tecs" translate="no">
            <i class="bx bxl-tailwind-css"></i>
            <p>Tailwind</p>
          </div>
          <div className="tecs" translate="no">
            <i class="bx bxl-bootstrap"></i>
            <p>Bootstrap</p>
          </div>
          <div className="tecs" translate="no">
            <i class="bx bxl-github"></i>
            <p>Github</p>
          </div>
          <div className="tecs" translate="no">
            <i class="bx bxl-git"></i>
            <p>Git</p>
          </div>
          <div className="tecs" translate="no">
            <i class="fa-solid fa-database"></i>
            <p>MySQL</p>
          </div>
          <div className="tecs" translate="no">
            <i class="fa-solid fa-database"></i>
            <p>SQL Server</p>
          </div>
          <div className="tecs" translate="no">
            <i class="fa-brands fa-node-js"></i>
            <p>Next JS</p>
          </div>
          <div className="tecs" translate="no">
            <i class="fa-brands fa-node-js"></i>
            <p>Express JS</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Technologies;
