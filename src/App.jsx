import "./App.css";
//Components Imports
import Navbar from "./components/navbar";

import Home from "./pages/Home";
import Technologies from "./pages/Technologies";
import Services from "./pages/Services";

function App() {
  return (
    <div className="main_content">
      <Navbar></Navbar>
      <section id="Home">
        <Home></Home>
      </section>
      <section id="Skills">
        <Technologies></Technologies>
      </section>
      <section id="Projects"></section>
      <section id="About"></section>
      <section id="Services">
        <Services></Services>
      </section>
      <section id="Contact"></section>
    </div>
  );
}

export default App;
