import React from 'react';
import './css/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>&copy; {currentYear} Boubou Thiam Niang. All Rights Reserved.</p>
            <p>
                Contact: <a href="mailto:boubouniang@yahoo.fr">boubouniang@yahoo.fr</a> | 
                LinkedIn: <a href="https://www.linkedin.com/in/boubou-thiam-niang-a89671a9/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                    https://www.linkedin.com/in/boubou-thiam-niang-a89671a9/
                </a>
            </p>
        </footer>
    );
};

export default Footer;
