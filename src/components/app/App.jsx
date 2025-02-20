import BeautyServices from "../beautyServices/BeautyServices";
import Header from "../header/Header";
import OurWorks from "../ourWorks/OurWorks";
import Footer from "../footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <BeautyServices />
      <OurWorks />
      <Footer />
    </div>
  );
};

export default App;
