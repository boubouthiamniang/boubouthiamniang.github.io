import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiOrcid } from 'react-icons/si';
import './css/Header.css';
import avatar from '../assets/images/profil_rotate.jpg'; // Import the avatar image

const Header = () => {
  return (
    <header className="header">
      {/* Social Icons in Top-Right Corner */}
      <div className="social-icons">
        <a href="https://github.com/boubouthiamniang" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/boubou-thiam-niang-a89671a9/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://orcid.org/0000-0002-8618-1740" target="_blank" rel="noopener noreferrer">
          <SiOrcid />
        </a>
        <a href="https://x.com/boubou_niang" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
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
