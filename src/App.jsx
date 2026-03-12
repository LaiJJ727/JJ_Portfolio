import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Introduction from "./components/Introduction.jsx";
import Nav from "./components/Nav.jsx";
import Experience from "./components/Experience.jsx" ;
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx"; 

function App() {
  return (
    <div>
      <Nav />
      <Introduction />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
