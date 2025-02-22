import "./ourWorks.scss";
import works from "../../images/ourWorks/work.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPortfolioData } from "../../reduxSlices/portfolioSlice/portfolioSlice";

const OurWorks = () => {
  const portfolioData = useSelector((state) => state.portfolio.portfolioData);
  const portfolioUpload = useSelector(
    (state) => state.portfolio.portfolioUpload
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPortfolioData());
  }, []);

  return (
    <div className="ourWorks">
      <h2 className="ourWorks__title">Мои работы</h2>
      <nav className="ourWorks__navigation">
        <ul>
          <li>Показать все</li>
          <li>Бьюти услуги</li>
          <li>Услуги пирсинга</li>
          <li>Уход за телом</li>
        </ul>
      </nav>
      <div className="ourWorks__images">
        <div className="ourWorks__images-border">
          <img src={works} alt="works" />
        </div>
        <div className="ourWorks__images-border">
          <img src={works} alt="works" />
        </div>
        <div className="ourWorks__images-border">
          <img src={works} alt="works" />
        </div>
        <div className="ourWorks__images-border">
          <img src={works} alt="works" />
        </div>
        <div className="ourWorks__images-border">
          <img src={works} alt="works" />
        </div>
        <div className="ourWorks__images-border">
          <img src={works} alt="works" />
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
