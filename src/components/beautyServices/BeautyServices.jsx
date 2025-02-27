import "./beautyservices.scss";
import quoteIcon from "../../images/beautyService/quoteIcon.svg";
import kevinMurphy from "../../images/beautyService/brends/brand.svg";
import oribe from "../../images/beautyService/brends/brand2.svg";
import alterna from "../../images/beautyService/brends/brand3.svg";
import aldoCoppola from "../../images/beautyService/brends/brand4.svg";
import cosmetology from "../../images/beautyService/cosmet.png";
import piercing from "../../images/beautyService/piercing.jpg";
import peeling from "../../images/beautyService/peeling.png";
import depilation from "../../images/beautyService/depilation.png";
import lips from "../../images/beautyService/lips.jpg";
import { Link } from "react-router";

const BeautyServices = () => {
  const beautyServicesList = [
    { id: 1, title: "Косметология", img: cosmetology },
    { id: 2, title: "Пирсинг", img: piercing },
    { id: 3, title: "Депиляция", img: depilation },
    { id: 4, title: "Увеличение губ", img: lips },
    { id: 5, title: "Пилинг", img: peeling },
  ];

  return (
    <section className="services">
      <img className="services__icon" src={quoteIcon} alt="quoteIcon" />
      <div className="services__description">
        <h2>Почему выбирают меня? </h2>
        <p>
          Опыт работы: я специалист с многолетним опытом, работаю с современным
          оборудованием и качественными материалами.
        </p>
        <p>
          Индивидуальный подход: я страюсь всегда учитывать Ваши пожелания и
          особенности, чтобы результат превзошел ожидания.
        </p>
        <p>
          Безопасность и комфорт: строгое соблюдение санитарных норм и уютная
          атмосфера сделают ваш визит приятным и безопасным.
        </p>
      </div>
      <div className="services__cards">
        {beautyServicesList.map((item) => {
          return (
            <Link key={item.id} to="/services" className="services__cards_item">
              <div key={item.id} className="services__cards_item-border">
                <img src={item.img} alt="cosmetology-icon" />
              </div>
              <div className="services__cards-text">{item.title}</div>
            </Link>
          );
        })}
      </div>
      <div className="services__brends">
        <div className="services__brends-group">
          <img src={kevinMurphy} alt="Kevin-Murphy" />
          <img src={oribe} alt="Oribe" />
          <img src={alterna} alt="Alterna" />
          <img src={aldoCoppola} alt="Aldo-Coppola" />
        </div>
      </div>
    </section>
  );
};

export default BeautyServices;
