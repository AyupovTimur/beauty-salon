import React, { useState, useEffect } from "react";
import infoImg from "../../images/sliderImg/info.jpg";
import infoImg2 from "../../images/sliderImg/info2.jpg";
import "./slider.scss";

const Slider = () => {
  const slides = [infoImg, infoImg2];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <div
        className="slider__slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slider__slide">
            <img src={slide} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="slider__pagination">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider__pagination-dot ${
              index === currentSlide ? "active" : null
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
