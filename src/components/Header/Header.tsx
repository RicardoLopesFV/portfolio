import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        {" "}
        {">"} Ricardo Lopes<span className="header__title--cursor">_</span>
      </h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <span className="header__roles">Roles</span>
            <span className="header__separator"> :</span>
          </li>
          <li className="header__item">
            <a className="header__link" href="#">
              Student
            </a>
          </li>
          <li className="header__item">/</li>
          <li className="header__item">
            <a className="header__link" href="#dev">
              Dev
            </a>
          </li>
          <li className="header__item">/</li>
          <li className="header__item">
            <a className="header__link" href="#gamer">
              Gamer
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
