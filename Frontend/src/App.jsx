import "./App.css";
//Components Imports
import Navbar from "./components/navbar";

import Home from "./pages/Home";
import Technologies from "./pages/Technologies";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="main_content">
        <section id="Home">
          <Home></Home>
        </section>
        <section id="Skills">
          <Technologies></Technologies>
        </section>
        <section id="Projects">
          <Projects></Projects>
        </section>
        <section id="Services">
          <Services></Services>
        </section>
        <section id="Experience">
          <Experience></Experience>
        </section>
        <section id="Contact">
          <Contact></Contact>
        </section>
      </div>
    </>
  );
}

export default App;
