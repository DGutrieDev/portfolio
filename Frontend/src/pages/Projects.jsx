import "../styles/Projects.css";
import { Slide } from "react-awesome-reveal";

import WeatherApp from "../assets/WeatherApp.png";
import DestinoCR from "../assets/DestinosCR.png";
import Portfolio from "../assets/Portfolio.png";

function Projects() {
  return (
    <div className="projects_container">
      <div className="project_tittle">
        <h1>Projects</h1>
      </div>
      <div className="project_content">
        <div className="project_card">
          <div className="image">
            <Slide>
              <img src={WeatherApp} alt="WeatherApp" />
            </Slide>
          </div>
          <div className="info">
            <Slide direction="right" delay={0.2}>
              <div className="tittle">
                <div className="header_card">
                  <h2>Weather Forecast App</h2>
                  <div className="header_info">
                    <i class="fa-brands fa-react"></i>
                    <i class="fa-brands fa-js"></i>
                    <i class="fa-brands fa-css3"></i>
                  </div>
                </div>
              </div>
              <div className="description">
                <p>
                  Weather App is a web application that allows users to check
                  the weather of any city in the world. The app uses the
                  OpenWeatherMap API to fetch the weather data.
                </p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/DGutrieDev/weather-forecast-app"
                  target="_blank"
                >
                  <i class="fab fa-github"></i>
                  <p>Code</p>
                </a>
                <a
                  href="https://weather-dgutriedev.netlify.app/"
                  target="_blank"
                >
                  <i class="fas fa-eye"></i>
                  <p>Preview</p>
                </a>
              </div>
            </Slide>
          </div>
        </div>
        <div className="project_card">
          <div className="image">
            <Slide>
              <img src={DestinoCR} alt="DestinoCR" />
            </Slide>
          </div>
          <div className="info">
            <Slide direction="right" delay={0.2}>
              <div className="tittle">
                <div className="header_card">
                  <h2>Destinos CR</h2>
                  <div className="header_info">
                    <i class="fa-brands fa-laravel"></i>
                    <i class="fa-brands fa-php"></i>
                    <i class="fa-brands fa-js"></i>
                    <i class="fa-brands fa-css3"></i>
                  </div>
                </div>
              </div>
              <div className="description">
                <p>
                  Touristics web application that allows users to check the best
                  places to visit in Costa Rica. The app uses recommendations
                  system based on user preferences and searchs. Colaborative
                  project with other developers.
                </p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/DGutrieDev/Destinos_CR"
                  target="_blank"
                >
                  <i class="fab fa-github"></i>
                  <p>Code</p>
                </a>
                <a
                  href="https://destinoscr2.000webhostapp.com/"
                  target="_blank"
                >
                  <i class="fas fa-eye"></i>
                  <p>Preview</p>
                </a>
              </div>
            </Slide>
          </div>
        </div>
        <div className="project_card">
          <div className="image">
            <Slide>
              <img src={Portfolio} alt="DestinoCR" />
            </Slide>
          </div>
          <div className="info">
            <Slide direction="right" delay={0.2}>
              <div className="tittle">
                <div className="header_card">
                  <h2>Portfolio Website</h2>
                  <div className="header_info">
                    <i class="fa-brands fa-react"></i>
                    <i class="fa-brands fa-js"></i>
                    <i class="fa-brands fa-css3"></i>
                  </div>
                </div>
              </div>
              <div className="description">
                <p>
                  Portfolio website to show my projects and skills. Developed
                  with React, Js and CSS.
                </p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/DGutrieDev/portfolio"
                  target="_blank"
                >
                  <i class="fab fa-github"></i>
                  <p>Code</p>
                </a>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
