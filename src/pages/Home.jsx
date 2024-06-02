import { React, useRef, useEffect } from "react";
import { Slide, Fade } from "react-awesome-reveal";
import Typed from 'typed.js';
import Logo from '../assets/Logo.png'
import '../styles/Home.css';

function Home() {
    const text = useRef(null);
    useEffect(() => {
        const typed = new Typed(text.current, {
            strings: ["Software Developer", "Database Developer", "Web Developer", "Programmer"],
            typeSpeed: 80,
            loopCount: Infinity,
            loop: true,
            showCursor: false,
            fadeOut: false,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            backDelay: 700,
            startDelay: 800,
            backSpeed: 100,
        });
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div className="Home_container">
            <div className="home_content">
                <Slide>
                    <h3 translate="no">Hi I'm Denny Gutrie Arguedas</h3>
                    <div className="developer_profile_text">
                        <p translate="no">I'm a <span className="inner_Text" ref={text} translate="no"></span></p>
                    </div>
                    <p className="description_text">
                        Welcome to my porfolio website, here you can know more about me, the services what i offer,
                        you can see some projects and contact me.
                        Actually i'm a computer science student in Costa Rica University, during this time in the University
                        i participed in some software develops, especially in web develop using diferents frameworks and programming languages
                    </p>
                    <button className="cv">
                        <a href="#">
                            See CV
                        </a>
                    </button>
                </Slide>
            </div>
            <div className="home_content_image">
                <Fade delay={1000}>
                    <img src={Logo} alt="" />
                </Fade>
            </div>
        </div>
    )
}

export default Home;