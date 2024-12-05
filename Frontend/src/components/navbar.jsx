import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar_content">
        <div className="account_links">
          <ul className="account_list">
            <li className="account_link">
              <a href="https://github.com/DGutrieDev" target="_blank">
                <i className="bx bxl-github"></i>
                <p>Github</p>
              </a>
            </li>
            <li className="account_link">
              <a
                href="https://www.linkedin.com/in/denny-gutrie-arguedas-952621301/"
                target="_blank"
              >
                <i className="bx bxl-linkedin"></i>
                <p>Linkedin</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="portfolio_links">
          <ul className="portfolio_list">
            <li className="portfolio_link">
              <a href="#Home">
                <i className="bx bx-home-alt-2"></i>
                <p>Home</p>
              </a>
            </li>
            <li className="portfolio_link">
              <a href="#Skills">
                <i className="bx bxl-react"></i>
                <p>Technologies</p>
              </a>
            </li>
            <li className="portfolio_link">
              <a href="#Projects">
                <i className="bx bx-code-alt"></i>
                <p>Projects</p>
              </a>
            </li>
            <li className="portfolio_link">
              <a href="#Services">
                <i className="bx bx-laptop"></i>
                <p>Services</p>
              </a>
            </li>
            <li className="portfolio_link">
              <a href="#Experience">
                <i class='bx bx-star'></i>
                <p>Experience</p>
              </a>
            </li>
            <li className="portfolio_link">
              <a href="#Contact">
                <i className="bx bx-envelope"></i>
                <p>Contact</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
