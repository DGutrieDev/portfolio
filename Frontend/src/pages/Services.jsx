import "../styles/Services.css";
import { Fade } from "react-awesome-reveal";

function Services() {
  return (
    <section className="services_container">
      <header className="service_title">
        <h1>Services</h1>
      </header>
      <div className="service_content">
        <Fade>
          <article className="service_info">
            <div className="service_name">
              <i className="fa-brands fa-chrome" aria-hidden="true"></i>
              <p>Web Development</p>
            </div>
            <div className="service_descrip">
              <p>
                Creation and maintenance of robust and scalable web
                applications, both frontend and backend, using modern
                technologies.
              </p>
            </div>
          </article>
          <article className="service_info">
            <div className="service_name">
              <i className="fa-solid fa-database" aria-hidden="true"></i>
              <p>Database Development</p>
            </div>
            <div className="service_descrip">
              <p>
                Design, implementation, and optimization of databases using SQL,
                SQL Server, and MySQL to ensure efficient and secure data management.
              </p>
            </div>
          </article>
          <article className="service_info">
            <div className="service_name">
              <i className="fa-solid fa-file" aria-hidden="true"></i>
              <p>Requirements Analysis</p>
            </div>
            <div className="service_descrip">
              <p>
                Detailed gathering and analysis of project requirements to
                ensure a clear and precise understanding of the client's needs.
              </p>
            </div>
          </article>
        </Fade>
      </div>
    </section>
  );
}

export default Services;