import "./About.scss";

export const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about__title">{">"} whoami</h2>

      <div className="about__content">
        <p>
          Olá ~ sou o Ricardo, um desenvolvedor de 26 anos focado em construir
          interfaces web de alta performance. Atualmente curso Análise e
          Desenvolvimento de Sistemas na PUCPR e utilizo o código para dar vida
          a ideias que unem design limpo e eficiência técnica.
        </p>
        <p>
          Sou adepto ao <em>ricing</em> e obcecado por otimização. O meu
          ambiente de trabalho é meticulosamente configurado no Windows 11 com
          WSL2 (Ubuntu), tiling window managers (Komorebi) e terminais
          turbinados com Oh-my-posh. Todo o meu ecossistema, incluindo o meu
          editor Cursor e o Zen Browser, é unificado pela paleta Catppuccin
          Macchiato. Para mim, a estética do fluxo de trabalho é tão importante
          quanto a execução do código.
        </p>
        <p>
          Quando não estou a escrever TypeScript ou SCSS, estou provavelmente a
          focar a minha mira em jogos FPS e de extração como{" "}
          <em>Rules of Engagement</em> e <em>Valorant</em>, a criar automações
          no n8n para manter a minha vida no <em>inbox zero</em>, ou a passar
          tempo offline com a minha namorada Vanessa e a nossa gatinha
          resgatada.
        </p>
      </div>

      <div className="about__footer">
        <div className="about__links">
          <p className="about__links-title">Encontre-me aqui ~</p>
          <div className="about__grid">
            <div className="about__link-group">
              <span className="about__label">GitHub</span>
              <a href="#" className="about__link">
                @seu-user
              </a>
            </div>
            <div className="about__link-group">
              <span className="about__label">X (Twitter)</span>
              <a href="#" className="about__link">
                @seu-user
              </a>
            </div>
            <div className="about__link-group">
              <span className="about__label">LinkedIn</span>
              <a href="#" className="about__link">
                @seu-user
              </a>
            </div>
            <div className="about__link-group">
              <span className="about__label">Email</span>
              <a href="mailto:seuemail@gmail.com" className="about__link">
                seuemail@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
