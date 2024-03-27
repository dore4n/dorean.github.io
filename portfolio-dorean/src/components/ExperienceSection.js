import React from 'react';

function ExperienceSection() {
  return (
    <section className="experiencia" id="experiencia" aria-label="Experiência">
      <h2 className="subtitulo">EXPERIÊNCIA</h2>
      <div>
        <p className="experiencia-texto">Desenvolvo projetos back-end e front-end utilizando <strong>React</strong>,
          <strong>Java</strong> e <strong>Python</strong> como stacks principais. Possuo conhecimento também na API da
          <strong>OpenAI</strong> onde participo do conceito e desenvolvimento de aplicações supervisionadas por IA como o
          VetGPT. No projeto VetGPT também trabalhei ativamente no <strong>UI/UX Design</strong> e
          <strong>Front-End</strong> do
          projeto.
        </p>

        <div className="empresa">
          <span className="empresa-ano">2023 - Atual</span>
          <h3 className="empresa-titulo">Yellow Leaf</h3>
          <span className="empresa-titulo">Desenvolvedor Pleno</span>
          <p className="empresa-texto">Atuo como desenvolvedor fullstack, UI/UX no desenvolvimento de aplicações web.
          </p>
          <ul className="empresa-habilidades">
            <li>React</li>
            <li>Python</li>
            <li>UI Design</li>
            <li>UX Design</li>
            <li>Figma</li>
          </ul>
        </div>

        <div className="empresa">
          <span className="empresa-ano">2022 - 2024</span>
          <h3 className="empresa-titulo">CENUV - Diretoria de TI</h3>
          <span className="empresa-titulo">Desenvolvedor FullStack</span>
          <p className="empresa-texto">Implementação de novas features, análise de código, manutenção de aplicativos e
            confecção de testes unitários de aplicações SaaS. Acompanhamento de testes integrados.</p>
          <ul className="empresa-habilidades">
            <li>React</li>
            <li>Java</li>
            <li>Vue</li>
            <li>SpringBoot</li>
            <li>AWS</li>
            <li>UI Design</li>
          </ul>
        </div>
      </div >
    </section >
  );
}

export default ExperienceSection;
