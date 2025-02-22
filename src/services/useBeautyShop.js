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

  return { getFullPortfolioData, getOnePortfolioUnit };
};

export default useBeautyShop;
