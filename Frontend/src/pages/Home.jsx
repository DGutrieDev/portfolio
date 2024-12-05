import React, { useRef, useEffect } from "react";
import { Slide, Fade } from "react-awesome-reveal";
import homeData from "../../Data/HomeData";
import CVDropdown from "../components/cvdropdown";
import Typed from "typed.js";
import Logo from "/assets/Logo.png";
import "../styles/Home.css";

function Home() {
  const text = useRef(null);
  useEffect(() => {
    const typed = new Typed(text.current, {
      strings: homeData.roles,
      typeSpeed: 80,
      loop: true,
      showCursor: false,
      backSpeed: 100,
      backDelay: 700,
      startDelay: 800,
    });
    return () => {
      typed.destroy();
    };
  }, [homeData.roles]);

  return (
    <div className="Home_container">
      <div className="home_content">
        <Slide>
          <h3 translate="no">Hi I'm {homeData.name}</h3>
          <div className="developer_profile_text">
            <p translate="no">
              I'm a{" "}
              <span className="inner_Text" ref={text} translate="no"></span>
            </p>
          </div>
          <p className="description_text">{homeData.description}</p>
          <div className="links_mobile">
            <CVDropdown />
            <a href={homeData.socialLinks.linkedin} target="__blank" className="Slinks">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={homeData.socialLinks.github} target="__blank" className="Slinks">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </Slide>
      </div>
      <div className="home_content_image">
        <Fade delay={1000}>
          <img src={Logo} alt="Logo" />
        </Fade>
      </div>
    </div>
  );
}

export default Home;
