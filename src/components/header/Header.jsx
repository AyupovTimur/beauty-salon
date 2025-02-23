import instagramIcon from "../../images/header/instIcon.svg";
import headerIcon from "../../images/header/headerIcon.svg";
import { useState } from "react";
import { NavLink } from "react-router";

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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "activeLink" : "header__item"
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/aboutMe"
            className={({ isActive }) =>
              isActive ? "activeLink" : "header__item"
            }
          >
            Обо мне
          </NavLink>
          <NavLink to="/">
            <img
              style={{ width: "5rem", height: "5rem" }}
              className="header__icon"
              src={headerIcon}
              alt="headerIcon"
            />
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "activeLink" : "header__item"
            }
          >
            Услуги
          </NavLink>
          <NavLink
            to="/my-works"
            className={({ isActive }) =>
              isActive ? "activeLink" : "header__item"
            }
          >
            Мои работы
          </NavLink>
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
