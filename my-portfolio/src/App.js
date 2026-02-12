import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamingNav from "./components/GamingNav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Persistent Gaming UI at the Top-Right */}
        <GamingNav /> 
        
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;