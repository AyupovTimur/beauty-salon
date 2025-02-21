import { lazy } from "react";
import { Routes, Route } from "react-router";
import Footer from "../footer/Footer";

const Header = lazy(() => import("../header/Header"));
const MainPage = lazy(() => import("../../pages/mainPage/MainPage"));
const AboutMePage = lazy(() => import("../../pages/aboutMePage/AboutMePage"));
const FeedbackPage = lazy(() =>
  import("../../pages/feedbackPage/FeedbackPage")
);
const ServicesPage = lazy(() =>
  import("../../pages/servicesPage/ServicesPage")
);

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutMe" element={<AboutMePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
