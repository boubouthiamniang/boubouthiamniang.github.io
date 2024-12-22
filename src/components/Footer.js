import React from 'react';
import './css/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>&copy; {currentYear} Boubou Thiam Niang. All Rights Reserved.</p>
            <p>Contact: boubouniang@yahoo.fr | LinkedIn: https://www.linkedin.com/in/boubou-thiam-niang-a89671a9/</p>
        </footer>
    );
};

export default Footer;
