import React from 'react';
import fotoIntro from "../img/fotoIntro.png";

function MainIntroduction() {
  return (
    <main id="mainIntroduction" className="introducao1">
      <div className="introducao">
        <img src={fotoIntro} alt="foto da intro possuíndo vetorização de imagem do engenheiro e design responsável pela landing page" />
        <div>
          <h1>Software Engineer</h1>
          <p>Eu sou um entusiasta da tecnologia e desenvolvimento de sistemas, com sede de aprendizado e conquistas.</p>
        </div>
      </div>
    </main>
  );
}

export default MainIntroduction;
