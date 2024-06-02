import React from "react";
import "../styles/Services.css";
import { Fade } from "react-awesome-reveal";

function Services() {
  return (
    <div className="services_container">
      <div className="service_tittle">
        <h1>Services</h1>
      </div>
      <div className="service_content">
        <div className="service_container">
          <Fade delay={250}>
            <div className="service_descrip">
              <i class="bx bxs-data"></i>
              <h4>Database Development</h4>
              <p>
                Design, implementation, and optimization of databases using SQL,
                SQL Server, and MySQL to ensure efficient and secure data
                storage.
              </p>
            </div>
          </Fade>
          <Fade delay={250}>
            <div className="service_descrip">
              <i class="fa-brands fa-firefox-browser"></i>
              <h4>Web Development</h4>
              <p>
                Creation and maintenance of robust and scalable web
                applications, both frontend and backend, using modern
                technologies.
              </p>
            </div>
          </Fade>
          <Fade delay={250}>
            <div className="service_descrip">
              <i class="bx bx-info-circle"></i>
              <h4>Requirements Analysis</h4>
              <p>
                Detailed gathering and analysis of project requirements to
                ensure a clear and precise understanding of the client's needs,
                facilitating successful project execution
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Services;
