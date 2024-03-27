import React from 'react';

function EducationSection() {
  return (
    <section className="formacao" id="formacao" aria-label="Formação">
      <div className="formacao-container">
        <h2 className="subtitulo">FORMAÇÃO</h2>
        <div>
          <p className="formacao-texto">Minha mais recente experiência acadêmica é a graduação em <strong>Análise e
            Desenvolvimento de Sistemas</strong>. Além disso me mantenho atualizado com cursos intensivos online.</p>

          <ul className="faculdade-lista">
            <li className="faculdade">
              <span className="faculdade-tipo">BACHAREL</span>
              <h3 className="faculdade-curso">Serviço Social</h3>
              <span className="faculdade-instituicao">UnB</span>
            </li>
            <li className="faculdade">
              <span className="faculdade-tipo">TECNÓLOGO</span>
              <h3 className="faculdade-curso">Análise e Desenvolvimento de Sistemas</h3>
              <span className="faculdade-instituicao">Universidade Católica de Brasília</span>
            </li>
            <li className="faculdade">
              <span className="faculdade-tipo">CERTIFICAÇÃO</span>
              <h3 className="faculdade-curso">AWS Cloud Practictioner</h3>
              <span className="faculdade-instituicao">Amazon Web Services</span>
            </li>
          </ul>
          <div className="formacao-extra">
            <div className="cursos">
              <h3>Cursos Intensivos</h3>
              <ul>
                <li>UX Design & UI Design, Html & CSS e JavaScript<span>Origmid</span></li>
                <li>CapGeminiSTART Cloud<span>CapGemini</span></li>
                <li>Python do zero ao avançado + ChatGPT<span>Udemy</span></li>
                <li>Java Completo, Testes unitários em Java com JUnit e Mockito <span>Udemy</span></li>
                <li>Formação Angular (v15+) <span>Udemy</span></li>
                <li>Vue 3 JS Completo <span>Udemy</span> </li>
                <li>20 Saas metrics you must know<span>Udemy</span></li>

              </ul>
            </div>
            <div className="idiomas">
              <h3>Idiomas</h3>
              <ul>
                <li>Inglês <span>/ Avançado</span></li>
                <li>Espanhol <span>/ Básico</span></li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}

export default EducationSection;
