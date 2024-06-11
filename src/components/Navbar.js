// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/biography">Biography</Link></li>
        <li><Link to="/interests">Interests</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/photo-gallery">Photo Gallery</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
