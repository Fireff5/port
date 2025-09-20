import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import './App.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'light';
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  console.log(isDarkMode)

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  

  return (
    <div className="font-sans" style={ {backgroundColor:isDarkMode ? '#1a202c': '#f7fafc',color:isDarkMode ? '#f7fafc': '#1a202c'} }>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} className='navbar'/>
     <Hero  className='hero'/>
      <About className='about' />
      <Projects  className='projects'/>
      <Skills  className='skills'/>
      <Certificates  className='certicates'/>
      <Contact  className='contact'/>
      
      <footer className="p-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white text-center">
        <p>&copy; 2025 Mohamed Rilwan. All rights reserved.</p>
        <a
                href="https://github.com/Fireff5"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaGithub />
              </a>
        
              <a
                href="https://www.linkedin.com/in/mohamed-rilwan-386698291/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
        
              <a
                href="https://www.instagram.com/rilwan_uzumaki_/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
              <FaInstagramSquare />
              </a>
      </footer>    
    </div>
  );
};

export default App;
