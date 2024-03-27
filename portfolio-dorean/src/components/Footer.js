import React from 'react';

function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer-container">
        <p className="footer-texto">Estou disponível para novos projetos no momento. Entre em contato comigo e marcamos uma
          conversa 👋 </p>
        <ul className="footer-contato">
          <li>lucasebsantos0@gmail.com</li>
          <li> <a href="https://wa.me//5561999864292"> +55 61 9.9986-4292 </a></li>
          <li> <a href="https://www.linkedin.com/in/lucasebsantos/"> in: lucasebsantos </a></li>
        </ul>
        <p class="footer-copy">Todos os direitos Reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
