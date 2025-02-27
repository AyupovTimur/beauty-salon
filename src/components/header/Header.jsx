import instagramIcon from "../../images/header/instIcon.svg";
import headerIcon from "../../images/header/headerIcon.svg";
import telegrammIcon from "../../images/footer/telegram.svg";
import { NavLink } from "react-router";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__menu">
        <ul className="header__menu-list">
          <a target="_blank" href="#">
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
          <a target="_blank" href="#">
            <img
              className="header__icon"
              src={telegrammIcon}
              alt="instagramIcon"
            />
          </a>
        </ul>
      </nav>
      {<BurgerMenu />}
    </header>
  );
};

export default Header;
