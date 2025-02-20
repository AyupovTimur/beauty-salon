import React, { useState } from "react";
import "./slider.scss";

const slides = [
  {
    image:
      "https://static.tildacdn.com/tild3165-3039-4766-b237-613566383934/6.jpeg",
  },
  {
    image: "https://st31.stblizko.ru/images/licenses/001/941/806_original.jpg",
  },
  {
    image:
      "https://static.tildacdn.com/tild3165-3039-4766-b237-613566383934/6.jpeg",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className="slidesContainer">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{
              transform: `translateX(${-100 * currentIndex}%)`,
              backgroundImage: `url(${slide.image})`,
            }}
          ></div>
        ))}
      </div>
      <button className="leftArrow" onClick={goToPrevious}>
        &larr;
      </button>
      <button className="rightArrow" onClick={goToNext}>
        &rarr;
      </button>
    </div>
  );
};

export default Slider;
