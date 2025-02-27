import "./footer.scss";
import icon from "../../images/header/headerIcon.svg";
import instagrammIcon from "../../images/header/instIcon.svg";
import whatsApp from "../../images/footer/whatsapp.svg";
import telegrammIcon from "../../images/footer/telegram.svg";
import vkIcon from "../../images/footer/vk.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__border">
        <div className="footer__icon">
          <img src={icon} alt="" />
        </div>
        <div className="footer__contacts">
          <div className="footer__title">Контакты</div>
          <ul>
            <li className="footer__listItem">
              <a href="tel:+79177811680">Тел: +79177811680</a>
            </li>
            <li className="footer__listItem">
              Республика Башкортостан, Альшеевский район, <br />
              с. Раевский, ул. Гагарина, д. 29
            </li>
          </ul>
        </div>
        <div className="footer__workMode">
          <div className="footer__title">Режим работы</div>
          <ul>
            <li className="footer__listItem">С 10:00 до 20:00 (Пн-Пт)</li>
            <li className="footer__listItem">С 12:00 до 18:00 (Сб-Вс)</li>
          </ul>
        </div>
        <div className="footer__socialMedia">
          <a target="_blank" href="">
            <img src={instagrammIcon} alt="" />
          </a>
          <a target="_blank" href="">
            <img src={whatsApp} alt="" />
          </a>
          <a target="_blank" href="">
            <img src={telegrammIcon} alt="" />
          </a>
          <a target="_blank" href="">
            <img src={vkIcon} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
