import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';
import avatar from '../assets/images/profil_rotate.jpg';  // Import the avatar image

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="branding">
          {/* Avatar Image */}
          <img
            src={avatar}
            alt="Your Name"
            className="avatar"
          />
          <div>
            <h1>Boubou Thiam Niang</h1>
            <h2>Ph.D. R&D Engineer in Software Engineering</h2>
          </div>
        </div>
        <nav className="nav-bar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/teaching">Teaching</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;