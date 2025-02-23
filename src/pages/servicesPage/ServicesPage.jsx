import ServicePrices from "../../components/servicePrices/ServicePrices";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";

const ServicesPage = () => {
  return (
    <>
      <ErrorBoundary>
        <ServicePrices />
      </ErrorBoundary>
    </>
  );
};

export default ServicesPage;
