function Header() {
  return (
    <header>
    <div className="header-container">
    <img src="/images/logo lemon.svg" alt="Little Lemon Logo" />
     <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
