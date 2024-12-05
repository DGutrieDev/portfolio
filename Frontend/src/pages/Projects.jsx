import "../styles/Projects.css";
import projectsData from "../../Data/ProjectsData";

function Projects() {
  return (
    <div className="projects_container">
      <div className="project_tittle">
        <h1>Projects</h1>
      </div>
      <div className="project_content">
        {projectsData.map((project, index) => (
          <div key={index} className="project_card">
            <div className="image">
                <img src={project.image} alt={project.title} />
            </div>
            <div className="info">
                <div className="tittle">
                  <div className="header_card">
                    <h2>{project.title}</h2>
                    <div className="header_info">
                      {project.technologies.map((tech, techIndex) => (
                        <i key={techIndex} className={`fa-brands ${tech}`}></i>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="description">
                  <p>{project.description}</p>
                </div>
                <div className="links">
                  <a href={project.links.code} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                    <p>Code</p>
                  </a>
                  {project.links.preview && (
                    <a
                      href={project.links.preview}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fas fa-eye"></i>
                      <p>Preview</p>
                    </a>
                  )}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
