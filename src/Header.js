import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from './assets/images/logo.svg'

function Header() {
  return (
    <header>
    <div className="header-container">
      <img src={logoImg} alt="Logo"/>
      <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
      </div>
    </header>
  );
}

export default Header;
