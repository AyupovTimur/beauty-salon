import { useHttp } from "../hooks/useHttp";

const useBeautyShop = () => {
  const { request } = useHttp();

  const getFullPortfolioData = async () => {
    const fullPortfolioData = await request(
      "https://67b8aafe699a8a7baef4df47.mockapi.io/portfolio"
    );
    return fullPortfolioData;
  };

  const getOnePortfolioUnit = async (id = 1) => {
    const onePortfolioUnit = await request(
      `https://67b8aafe699a8a7baef4df47.mockapi.io/portfolio/${id}`
    );
    return onePortfolioUnit;
  };

  const getFullPricesData = async () => {
    const pricesData = await request(
      "https://67b8aafe699a8a7baef4df47.mockapi.io/prices"
    );
    return pricesData;
  };

  return { getFullPortfolioData, getOnePortfolioUnit, getFullPricesData };
};
export default useBeautyShop;
