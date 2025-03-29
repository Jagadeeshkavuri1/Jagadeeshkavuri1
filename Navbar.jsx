import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle'; 
import './Navbar.css';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        &#9776; 
      </div>
      
      <div className="navbar-logo">
        <h1>Smart Study</h1>
      </div>

    
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/study-tools">Study Tools</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/quiz">Quiz</Link></li> 

        
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>

     
      <div className={`dark-mode-toggle ${isMenuOpen ? 'active' : ''}`}>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
