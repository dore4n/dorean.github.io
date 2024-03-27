import React from 'react';
import logomarca from '../img/logomarca.svg';

function Header() {
  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <a href="#mainIntroduction" onClick={handleScroll}><img src={logomarca} alt="Logo" /></a>
        <nav>
          <ul className="header-menu">
            <li><a href="#experiencia" onClick={handleScroll}>EXPERIÊNCIA</a></li>
            <li><a href="#formacao" onClick={handleScroll}>FORMAÇÃO</a></li>
            <li><a href="#contato" onClick={handleScroll}>CONTATO</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
