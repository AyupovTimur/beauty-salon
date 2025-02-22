import "./ourWorks.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPortfolioData } from "../../reduxSlices/portfolioSlice/portfolioSlice";
import { setActiveFilter } from "../../reduxSlices/filterSlice/portfolioFilterSlice";
import { createSelector } from "@reduxjs/toolkit";

const OurWorks = () => {
  const filteredPortfolioData = createSelector(
    (state) => state.portfolioFilter.activeFilter,
    (state) => state.portfolio.portfolioData,
    (activeFilter, portfolioData) => {
      if (activeFilter === "all") {
        return portfolioData;
      } else {
        return portfolioData.filter((item) => item.filter === activeFilter);
      }
    }
  );

  const filterData = useSelector(filteredPortfolioData);
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
          <li onClick={() => dispatch(setActiveFilter("all"))} name="all">
            Показать все
          </li>
          <li
            onClick={() => dispatch(setActiveFilter("cosmetology"))}
            name="cosmetology"
          >
            Косметология
          </li>
          <li onClick={() => dispatch(setActiveFilter("lips"))} name="lips">
            Увеличение губ
          </li>
          <li
            onClick={() => dispatch(setActiveFilter("piercing"))}
            name="piercing"
          >
            Пирсинг
          </li>
          <li
            onClick={() => dispatch(setActiveFilter("peeling"))}
            name="peeling"
          >
            Пилинг
          </li>
        </ul>
      </nav>
      <div className="ourWorks__images">
        {filterData.map((item) => {
          return (
            <div key={item.id} className="ourWorks__images-border">
              <img src={item.img} alt="works" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurWorks;
