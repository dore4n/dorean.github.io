import React from 'react';
import fotoIntro from "../img/fotoIntro.png";

function MainIntroduction() {
  return (
    <main className="introducao1">
      <div className="introducao">
        <img src={fotoIntro} alt="foto da intro possuíndo vetorização de imagem do engenheiro e design responsável pela landing page" />
        <div>
          <h1>Desenvolvedor<br /> FullStack</h1>
          <p>Localizado em Brasília</p>
        </div>
      </div>
    </main>
  );
}

export default MainIntroduction;
