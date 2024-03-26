import React from 'react';
import logomarca from '../img/logomarca.svg';

function Header() {
  return (
    <header className="header">
      <img src={logomarca} alt="Logo"/>
      <nav>
        <ul className="header-menu">
          <li><a href="#experiencia">EXPERIÊNCIA</a></li>
          <li><a href="#formacao">FORMAÇÃO</a></li>
          <li><a href="#contato">CONTATO</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
