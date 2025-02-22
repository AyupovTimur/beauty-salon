import "./servicePrices.scss";
import barber from "../../images/servicePrices/barber.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPrices } from "../../reduxSlices/servicesSlice/servicesSlice";

const ServicePrices = () => {
  const services = useSelector((state) => state.services.services);
  const servicesLoading = useSelector(
    (state) => state.services.servicesLoading
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrices());
  }, []);

  console.log(services[0]);

  return (
    <div className="servicePrices">
      <h2 className="servicePrices__title">Цены на услуги</h2>
      <div className="services-grid">
        {services.map((item, i) => {
          switch (i) {
            case 0:
              return (
                <div className="service-item">
                  <img src={barber} alt="Service 1" class="service-image" />
                  <div class="service-list">
                    <div class="service-row">
                      <div class="service-names">
                        {Object.keys(item).map((item) => {
                          return <p>{item}</p>;
                        })}
                      </div>
                      <div class="service-prices">
                        {Object.values(item).map((item) => {
                          return <p>{item}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            case 1:
              return (
                <div className="service-item">
                  <img src={barber} alt="Service 1" class="service-image" />
                  <div class="service-list">
                    <div class="service-row">
                      <div class="service-names">
                        {Object.keys(item).map((item) => {
                          return <p>{item}</p>;
                        })}
                      </div>
                      <div class="service-prices">
                        {Object.values(item).map((item) => {
                          return <p>{item}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            case 2:
              return (
                <div className="service-item">
                  <img src={barber} alt="Service 1" class="service-image" />
                  <div class="service-list">
                    <div class="service-row">
                      <div class="service-names">
                        {Object.keys(item).map((item) => {
                          return <p>{item}</p>;
                        })}
                      </div>
                      <div class="service-prices">
                        {Object.values(item).map((item) => {
                          return <p>{item}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            case 3:
              return (
                <div className="service-item">
                  <img src={barber} alt="Service 1" class="service-image" />
                  <div class="service-list">
                    <div class="service-row">
                      <div class="service-names">
                        {Object.keys(item).map((item) => {
                          return <p>{item}</p>;
                        })}
                      </div>
                      <div class="service-prices">
                        {Object.values(item).map((item) => {
                          return <p>{item}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            default:
              <div className="servicePrices__service">
                К сожалению цены не загрузились
              </div>;
          }
        })}
      </div>
    </div>
  );
};

export default ServicePrices;
