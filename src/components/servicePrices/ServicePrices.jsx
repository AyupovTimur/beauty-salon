import "./servicePrices.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPrices } from "../../reduxSlices/servicesSlice/servicesSlice";
import Spinner from "../spinner/Spinner";

const ServicePrices = () => {
  const services = useSelector((state) => state.services.services);
  const servicesLoading = useSelector(
    (state) => state.services.servicesLoading
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrices());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-prices">
      {servicesLoading === "loading" ? (
        <Spinner />
      ) : (
        <View services={services} />
      )}
    </div>
  );
};

const View = ({ services }) => {
  return (
    <div className="service-grid">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`service-item ${index % 2 === 0 ? "left" : "right"}`}
        >
          <img src={service.image} alt={`Услуга ${service.id}`} />
          <ul>
            <div className="service-title">{service.service}</div>
            {service.items.map((item, i) => (
              <li className="title" key={i}>
                {item.title} <span className="price">{item.price} ₽</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServicePrices;
