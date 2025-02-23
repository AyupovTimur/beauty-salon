import BeautyServices from "../../components/beautyServices/BeautyServices";
import MainSlider from "../../components/mainSlider/MainSlider";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";

const MainPage = () => {
  return (
    <>
      <ErrorBoundary>
        <MainSlider />
      </ErrorBoundary>
      <BeautyServices />
    </>
  );
};

export default MainPage;
