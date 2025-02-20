import instagramIcon from "../../images/header/instIcon.svg";
import headerIcon from "../../images/header/headerIcon.svg";
import { useState } from "react";
import "./header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <header className="header">
      <nav className="header__menu">
        <ul className="header__menu-list">
          <a href="#">
            <img
              className="header__icon"
              src={instagramIcon}
              alt="instagramIcon"
            />
          </a>
          <li className="header__item">Главная</li>
          <li className="header__item">Обо мне</li>
          <li className="header__item">Косметика</li>
          <img
            style={{ width: "5rem", height: "5rem" }}
            className="header__icon"
            src={headerIcon}
            alt="headerIcon"
          />
          <li className="header__item">Акции</li>
          <li className="header__item">Отзывы</li>
          <li className="header__item">Контакты</li>
          {<BurgerMenu open={open} onOpen={onOpen} />}
        </ul>
      </nav>
    </header>
  );
};

const BurgerMenu = ({ open, onOpen }) => {
  return (
    <div onClick={onOpen} className="burger-menu">
      <div className={`burger-icon ${open ? "open" : null}`} id="burger-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Header;
