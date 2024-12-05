import React from 'react'
import Slider from "react-slick";


// slider styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderContent = [1, 2, 3]

const Slide = () => {
    var settings = {
        dots: true,
        // dotsClass: "bg-white w-[300px] gap-x-[5px] flex h-[2px]",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
      <div className='h-[169px] w-[380px]'>
          <Slider {...settings}>
              {sliderContent.map(item => (
                  <div key={item} className='h-[169px] w-[380px]'>
                      <div className='flex flex-col justify-around h-full'>
                          <h2 className='text-[39px] text-white font-[zenkaku] font-bold'>Building the Future...</h2>
                          <p className='font-normal font-[zenkaku] text-base text-white'>Lorem ipsum dolor sit amet,
                              consectetur
                              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      </div>
                  </div>
              ))}
          </Slider>
      </div>

    )
}
export default Slide