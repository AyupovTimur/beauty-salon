import Slider from "../slider/Slider";
import "./mainSlider.scss";

const MainSlider = () => {
  return (
    <div className="mainSlider">
      <div className="mainSlider__grid">
        <h1>
          Ваша красота — моя забота! <br />
          <br /> Профессиональные услуги косметологии и пирсинга, чтобы
          подчеркнуть вашу индивидуальность и подарить уверенность в себе.
        </h1>
        <Slider />
      </div>
    </div>
  );
};

export default MainSlider;
