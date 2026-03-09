import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";


function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">

      {/* Header / Hero */}
      <header className="bg-white shadow-md py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-2">JJ Portfolio</h1>
          <p className="text-xl text-gray-600">Cybersecurity | Developer</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-12">

        {/* About Me */}
        <section id="about">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I am a cybersecurity student focusing on malware analysis, machine learning security,
            and software development. I enjoy learning new technologies and building projects that
            solve real problems.
          </p>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <li className="bg-white shadow p-3 rounded text-center">React</li>
            <li className="bg-white shadow p-3 rounded text-center">Python</li>
            <li className="bg-white shadow p-3 rounded text-center">Malware Analysis</li>
            <li className="bg-white shadow p-3 rounded text-center">Machine Learning</li>
            <li className="bg-white shadow p-3 rounded text-center">Digital Forensics</li>
          </ul>
        </section>

        {/* Career / Experience */}
        <section id="career">
          <h2 className="text-3xl font-semibold mb-4">Career</h2>
          <div className="space-y-4">
            <div className="bg-white shadow p-4 rounded">
              <h3 className="font-bold">Master of Cyber Security</h3>
              <p className="text-gray-600">Universiti Teknologi Malaysia</p>
              <p className="text-gray-700">Research: API Call Sequence Analysis using CNN for Malware Detection</p>
            </div>
            {/* Add more experience cards here if needed */}
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Email: your@email.com</li>
            <li>GitHub: <a href="https://github.com/yourname" className="text-blue-500 hover:underline">github.com/yourname</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/yourname" className="text-blue-500 hover:underline">linkedin.com/in/yourname</a></li>
          </ul>
        </section>

      </main>

      <footer className="bg-white shadow-md py-6 mt-12 text-center text-gray-500">
        © 2026 JJ. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
