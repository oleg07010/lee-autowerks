import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            {/* Left-aligned copyright text */}
            <div className="copyright-text">
                © 2024 Lee's Autowerks. All rights reserved.
            </div>

            {/* Right-aligned social media buttons */}
            <div className="social-buttons-container">
                <a href="https://www.instagram.com/lees_autowerks?igsh=OGpwMnZ3anMyeWd6" className="social-button instagram">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;
