import React from 'react';
import { Link } from 'react-router-dom';

// Navbar component (for uniform nav layout throughout the site.)
function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/biography">Biography</Link></li>
        <li><Link to="/interests">Interests</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
