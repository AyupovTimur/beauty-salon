import Slider from "../slider/Slider";
import "./mainSlider.scss";

const MainSlider = () => {
  return (
    <section className="mainSlider">
      <div className="mainSlider__grid">
        <h1>
          Ваша красота — моя забота! <br />
          <br /> Профессиональные услуги косметологии и пирсинга в с. Раевский.
          <br />
          <br />
          Помогу <br /> подчеркнуть Вашу индивидуальность и подарить уверенность
          в себе.
        </h1>
        <Slider />
      </div>
    </section>
  );
};

export default MainSlider;
