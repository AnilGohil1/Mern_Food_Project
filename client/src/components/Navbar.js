import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        <Link to="/Dishes" onClick={() => setMenuOpen(false)}>Dishes</Link>
        <Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
