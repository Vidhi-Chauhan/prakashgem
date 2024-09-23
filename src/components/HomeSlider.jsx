import React from "react";
import Slider from "react-slick";
import image1 from "../assets/Desktop1920694.webp";
import image2 from "../assets/Desktop1.jpg";
import image4 from "../assets/Desktop3.webp";
import "../css/HomeSlider.css";

const HomeSlider = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop sliding
    speed: 500, // Animation speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Speed of autoplay in milliseconds
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" />
        </div>

        <div>
          <img src={image4} alt="Slide 2" />
        </div>

        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default HomeSlider;
