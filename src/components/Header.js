import React, { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">Especialidades</li>
          <li className="nav-item">Nuestra firma</li>
          <li className="nav-item">Empresas</li>
          <li className="nav-item">Contacto</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
