import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

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
