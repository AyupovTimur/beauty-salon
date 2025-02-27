import "./ourWorks.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPortfolioData } from "../../reduxSlices/portfolioSlice/portfolioSlice";
import { setActiveFilter } from "../../reduxSlices/filterSlice/portfolioFilterSlice";
import { createSelector } from "@reduxjs/toolkit";
import Spinner from "../spinner/Spinner";
import Error from "../error/Error";

const OurWorks = () => {
  const links = [
    { id: 1, text: "Показать все", data: "all" },
    { id: 2, text: "Косметология", data: "cosmetology" },
    { id: 3, text: "Увеличение губ", data: "lips" },
    { id: 4, text: "Пирсинг", data: "piercing" },
    { id: 5, text: "Пилинг", data: "peeling" },
  ];

  const [activeLink, setActiveLink] = useState(1);

  const onActive = (id) => {
    setActiveLink(id);
  };

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
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="ourWorks">
      <nav className="ourWorks__navigation">
        <ul>
          {links.map((link) => {
            return (
              <li
                className={activeLink === link.id ? "active" : null}
                key={link.id}
                onClick={() => {
                  dispatch(setActiveFilter(link.data));
                  onActive(link.id);
                }}
              >
                {link.text}
              </li>
            );
          })}
        </ul>
      </nav>
      {portfolioUpload === "loading" ? (
        <Spinner />
      ) : portfolioUpload === "error" ? (
        <>
          <p style={{ fontSize: "3rem" }}>Что - то пошло не так</p>
          <Error />
        </>
      ) : (
        <ViewWorks filterData={filterData} />
      )}
    </section>
  );
};

const ViewWorks = ({ filterData }) => {
  return (
    <>
      <div className="ourWorks__images">
        {filterData.map((item) => {
          return (
            <div key={item.id} className="ourWorks__images-border">
              <img src={item.img} alt="works" />
            </div>
          );
        })}
      </div>
      <a
        href="https://vk.com/kosmetolog_raevskiy"
        alt="vk-group-link"
        className="other__works"
      >
        Ознакомится со всеми работами
      </a>
    </>
  );
};

export default OurWorks;
