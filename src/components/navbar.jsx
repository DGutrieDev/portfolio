import { React, useState } from "react";
import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar_container">
            <div className="navbar_content">
                <div className="account_links">
                    <ul className="account_list">
                        <li className="account_link">
                            <a href="https://github.com/DGutrieDev" target="_blank">
                                <i class='bx bxl-github'></i>
                                <p>Github</p>
                            </a>
                        </li>
                        <li className="account_link">
                            <a href="https://www.linkedin.com/in/denny-gutrie-arguedas-952621301/" target="_blank">
                                <i class='bx bxl-linkedin' ></i>
                                <p>Linkedin</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="portfolio_links">
                    <ul className="portfolio_list">
                        <li className="portfolio_link">
                            <a href="#Home">
                                <i class='bx bx-home-alt'></i>
                                <p>Home</p>
                            </a>
                        </li>
                        <li className="portfolio_link">
                            <a href="#Skills">
                                <i class='bx bxl-react' ></i>
                                <p>Technologies</p>
                            </a>
                        </li>
                        <li className="portfolio_link">
                            <a href="#Projects">
                                <i class='bx bxl-visual-studio'></i>
                                <p>Projects</p>
                            </a>
                        </li>
                        <li className="portfolio_link">
                            <a href="#About">
                                <i class='bx bxs-user-detail'></i>
                                <p>About</p>
                            </a>
                        </li>
                        <li className="portfolio_link">
                            <a href="#Services">
                                <i class='bx bx-briefcase-alt'></i>
                                <p>Services</p>
                            </a>
                        </li>
                        <li className="portfolio_link">
                            <a href="#Contact">
                                <i class='bx bx-envelope'></i>
                                <p>Contact</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}