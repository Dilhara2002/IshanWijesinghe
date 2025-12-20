import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;