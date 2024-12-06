import React from "react";
import Slider from "react-slick";

// slider styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// data that will come later
const sliderContent = [1, 2, 3];

const Slide = () => {

  // configuration for react-slick library
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div className="flex h-[2px]">
        <div className="flex  space-x-6 justify-start h-[2px]">
          {dots}
        </div>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-8 h-[2px] bg-[rgba(158,158,158)] overflow-hidden"></div>
    ),
  };


  return (
    <div className="h-[169px] w-[380px]">
      <Slider {...settings}>
        {/* each item in carousel */}
        {sliderContent.map((item) => (
          <div key={item} className="h-[219px] w-[380px]">
            <div className="flex flex-col justify-center space-y-11 h-full">
              <h2 className="text-[39px] text-white font-[zenkaku] font-bold">
                Building the Future...
              </h2>
              <p className="font-normal font-[zenkaku] text-base text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Slide;
