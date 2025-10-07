import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from './assets/images/logo.svg';

function Header() {
  // Estado para abrir/cerrar el menú
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false); // Cierra al hacer clic en un enlace

  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <img src={logoImg} alt="Logo" />

        {/* Menú hamburguesa */}
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navegación */}
        <nav className="navbar">
          <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
            <li><Link to="/booking" onClick={closeMenu}>Reservations</Link></li>
            <li><Link to="/order" onClick={closeMenu}>Order Online</Link></li>
            <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
