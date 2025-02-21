import "./servicePrices.scss";
import barber from "../../images/servicePrices/barber.svg";

const ServicePrices = () => {
  return (
    <div className="servicePrices">
      <h2 className="servicePrices__title">Цены на услуги</h2>
      <div className="servicePrices__container">
        <img className="servicePrices__img" src={barber} alt="" />
        <div className="servicePrices__card">
          <div className="servicePrices__card-service">
            <h3>Пиллинг</h3>
            <div>1000 ₽</div>
          </div>
          <div className="servicePrices__card-service">
            <h3>Пиллинг</h3>
            <div>1000 ₽</div>
          </div>
          <div className="servicePrices__card-service">
            <h3>Пиллинг</h3>
            <div>1000 ₽</div>
          </div>
        </div>
        <div className="servicePrices__card">
          <div className="servicePrices__card-service">
            <h3>Пиллинг</h3>
            <div>1000 ₽</div>
          </div>
          <div className="servicePrices__card-service">
            <h3>Пиллинг</h3>
            <div>1000 ₽</div>
          </div>
          <div className="servicePrices__card-service">
            <h3>Пиллинг</h3>
            <div>1000 ₽</div>
          </div>
        </div>
        <img className="servicePrices__img" src={barber} alt="" />
      </div>
    </div>
  );
};

export default ServicePrices;
