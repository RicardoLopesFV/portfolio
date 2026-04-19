import "./Terminal.scss";
// Ajuste a extensão da imagem conforme o seu arquivo (.jpg, .png, .webp)
import profileImg from "../../assets/profile.jpg";

export const Terminal = () => {
  return (
    <section className="terminal" id="sobre">
      <div className="terminal__window">
        {/* Barra superior imitando a janela do SO */}
        <div className="terminal__header">
          <div className="terminal__actions">
            <span className="terminal__dot terminal__dot--close"></span>
            <span className="terminal__dot terminal__dot--minimize"></span>
            <span className="terminal__dot terminal__dot--maximize"></span>
          </div>
          <span className="terminal__title">hello: ~</span>
        </div>

        {/* Corpo do Fastfetch */}
        <div className="terminal__body">
          <div className="terminal__avatar-wrapper">
            <img
              src={profileImg}
              alt="Ricardo Lopes"
              className="terminal__avatar"
            />
          </div>

          <div className="terminal__info">
            <div className="terminal__user">
              <span className="terminal__username">ricardo</span>@
              <span className="terminal__hostname">katana</span>
            </div>
            <div className="terminal__divider">-------------------------</div>

            <div className="terminal__row">
              <span className="terminal__key">OS</span>:{" "}
              <span className="terminal__value">Windows 11 / WSL2 Ubuntu</span>
            </div>
            <div className="terminal__row">
              <span className="terminal__key">WM</span>:{" "}
              <span className="terminal__value">komorebi 0.1.40</span>
            </div>
            <div className="terminal__row">
              <span className="terminal__key">Host</span>:{" "}
              <span className="terminal__value">MSI Katana 15 HX</span>
            </div>
            <div className="terminal__row">
              <span className="terminal__key">CPU</span>:{" "}
              <span className="terminal__value">Intel i7-14650HX</span>
            </div>
            <div className="terminal__row">
              <span className="terminal__key">GPU</span>:{" "}
              <span className="terminal__value">
                NVIDIA RTX 5070 Laptop (7.71 GiB) [Discrete]
              </span>
            </div>
            <div className="terminal__row">
              <span className="terminal__key">Course</span>:{" "}
              <span className="terminal__value">
                Análise e Dev. de Sistemas @ PUCPR
              </span>
            </div>
            <div className="terminal__row">
              <span className="terminal__key">Shell</span>:{" "}
              <span className="terminal__value">
                PowerShell 7 + Oh-my-posh / Bash + Oh-my-posh
              </span>
            </div>
            <div className="terminal__row">
              <span className="terminal__key">Editor</span>:{" "}
              <span className="terminal__value">Zed</span>
            </div>
            <div className="terminal__row">
              <span className="terminal__key">Theme</span>:{" "}
              <span className="terminal__value">Catppuccin Macchiato</span>
            </div>

            {/* Blocos de cores clássicos do final do neofetch/fastfetch */}
            <div className="terminal__colors">
              <span className="terminal__color-block terminal__color-block--1"></span>
              <span className="terminal__color-block terminal__color-block--2"></span>
              <span className="terminal__color-block terminal__color-block--3"></span>
              <span className="terminal__color-block terminal__color-block--4"></span>
              <span className="terminal__color-block terminal__color-block--5"></span>
              <span className="terminal__color-block terminal__color-block--6"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
