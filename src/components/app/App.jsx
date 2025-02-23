import { lazy } from "react";
import { Routes, Route } from "react-router";
import Footer from "../footer/Footer";
import BurgerMenu from "../burgerMenu/BurgerMenu";

const Header = lazy(() => import("../header/Header"));
const MainPage = lazy(() => import("../../pages/mainPage/MainPage"));
const AboutMePage = lazy(() => import("../../pages/aboutMePage/AboutMePage"));
const ServicesPage = lazy(() =>
  import("../../pages/servicesPage/ServicesPage")
);
const MyWorksPage = lazy(() => import("../../pages/myWorksPage/MyWorksPage"));
const ErrorPage = lazy(() => import("../../pages/errorPage/ErrorPage"));

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutMe" element={<AboutMePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/my-works" element={<MyWorksPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
