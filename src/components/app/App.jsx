import BeautyServices from "../beautyServices/BeautyServices";
import Header from "../header/Header";
import OurWorks from "../ourWorks/OurWorks";
import Footer from "../footer/Footer";
import BeautyMasters from "../beautyMasters/BeautyMasters";

const App = () => {
  return (
    <div className="app">
      <Header />
      <BeautyMasters />
      <BeautyServices />
      <OurWorks />
      <Footer />
    </div>
  );
};

export default App;
