import React, { useState } from "react";
import "./burgerMenu.scss";
import { Link } from "react-router";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="burger-menu">
      <button className="burger-button" onClick={toggleMenu}>
        <div className={`burger-icon ${isOpen ? "open" : null}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div className={`menu ${isOpen ? "open" : null}`}>
        <button className="close-button" onClick={closeMenu}>
          &times;
        </button>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Главная
            </Link>
          </li>
          <li>
            <Link to="/aboutMe" onClick={closeMenu}>
              Обо мне
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>
              Услуги
            </Link>
          </li>
          <li>
            <Link to="/my-works" onClick={closeMenu}>
              Мои работы
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
