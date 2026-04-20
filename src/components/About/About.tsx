import "./About.scss";

export const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about__title">{">"} whoami</h2>

      <div className="about__content">
        <p>
          Olá ~ meu nome é Ricardo, um gamer e futuro desenvolvedor de 26 anos
          focado em construir interfaces web de alta performance. Atualmente
          curso Análise e Desenvolvimento de Sistemas na PUCPR e utilizo o
          código para dar vida a ideias que unem design minimalista e eficiência
          técnica.
        </p>
        <p>
          Sou adepto ao <em>ricing</em> e obcecado por otimização. O meu
          ambiente de trabalho é meticulosamente configurado no Windows 11 com
          WSL2 (Ubuntu), tiling window managers (Komorebi) e terminais
          turbinados com Oh-my-posh. Todo o meu ecossistema, incluindo o meu
          editor Zed e o Zen Browser, é unificado pela paleta Catppuccin
          Macchiato. Para mim, a estética do fluxo de trabalho é tão importante
          quanto a execução do código.
        </p>
        <p>
          Quando não estou codando ou estudando, estou provavelmente curtindo
          meu tempo livre jogando games no estilo{" "}
          <em>survival horror, terror, fps</em> e um <em>lolzinho</em> de vez em
          quando, ou a passar um tempo com a minha namorada assistindo filmes e
          séries com nossa a gatinha Luna.
        </p>
      </div>

      <div className="about__footer">
        <div className="about__links">
          <p className="about__links-title">Encontre-me aqui ~</p>
          <div className="about__grid">
            <div className="about__link-group">
              <span className="about__label">GitHub</span>
              <a
                href="https://github.com/RicardoLopesFV"
                className="about__link"
              >
                RicardoLopesFV
              </a>
            </div>
            <div className="about__link-group">
              <span className="about__label">Instagram</span>
              <a
                href="https://www.instagram.com/ricardo_lopesfv/"
                className="about__link"
              >
                ricardo_lopesfv
              </a>
            </div>
            <div className="about__link-group">
              <span className="about__label">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/ricardolopesfv/"
                className="about__link"
              >
                ricardolopesfv
              </a>
            </div>
            <div className="about__link-group">
              <span className="about__label">Email</span>
              <a
                href="mailto:ricardolopesprog@gmail.com"
                className="about__link"
              >
                ricardolopesprog@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
