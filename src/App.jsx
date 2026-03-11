import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Introduction from "./components/Introduction.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  return (
    <div>
      <Nav />
      <Introduction />
      <Skills />

      <Education />
    </div>
  );
}

export default App;
