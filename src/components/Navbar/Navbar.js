import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Lee's Autowerks</h1>
            </div>

            {/* Hamburger Icon for mobile */}
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            {/* Navigation Links */}
            <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
                <li className="nav-links">
                    <NavLink className="nav-link" to="/" onClick={toggleMenu}>Homepage</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/about-us" onClick={toggleMenu}>About Us</NavLink>
                </li>
            </ul>
        </nav>
    );
};
