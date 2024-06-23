import "../styles/Services.css";
import { Fade } from "react-awesome-reveal";

function Services() {
  return (
    <div className="services_container">
      <div className="service_tittle">
        <h1>Services</h1>
      </div>
      <div className="service_content">
        <Fade>
          <div className="service_info">
            <div className="service_name">
              <i className="fa-brands fa-chrome"></i>
              <p>Web Development</p>
            </div>
            <div className="service_descrip">
              <p>
                Creation and maintenance of robust and scalable web
                applications, both frontend and backend, using modern
                technologies.
              </p>
            </div>
          </div>
          <div className="service_info">
            <div className="service_name">
              <i className="fa-solid fa-database"></i>
              <p>Database Development</p>
            </div>
            <div className="service_descrip">
              <p>
                Design, implementation, and optimization of databases using SQL,
                SQL Server, and MySQL to ensure efficient and secure data
              </p>
            </div>
          </div>
          <div className="service_info">
            <div className="service_name">
              <i className="fa-solid fa-file"></i>
              <p>Requirements Analysis</p>
            </div>
            <div className="service_descrip">
              <p>
                Detailed gathering and analysis of project requirements to
                ensure a clear and precise understanding of the client`s needs,
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Services;
