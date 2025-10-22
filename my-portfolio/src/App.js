import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
