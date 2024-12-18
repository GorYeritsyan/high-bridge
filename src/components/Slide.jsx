import Slider from "react-slick";

// import slick styles for styled slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// data for later use
const sliderContent = [1, 2, 3];

// all slider logic will be added later
const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // customizing controllers wrapper
    appendDots: (dots) => (
      <div>
        {/* controllers wrapper div */}
        <div className="flex list-none w-full h-[5px] space-x-[10px] items-center relative bottom-2">
          {dots}
        </div>
      </div>
    ),
    // customizing controller
    customPaging: () => (
      // inactive state controller
      <div className="w-8 h-[2px] bg-[rgba(158,158,158)] cursor-pointer"></div>
    ),
    // need for handling controllers active state
    dotsClass: "custom-dots",
  };

  return (
    <Slider className="w-[380px] h-[219px]" {...settings}>
      {sliderContent.map((el) => (
        <div
          key={el}
          className="w-[380px] flex flex-col justify-between pt-6 h-[219px]"
        >
          <div className="justify-center h-[169px] space-y-10">
            <h2 className="text-[39px] text-white font-[zenkaku] font-bold">
              Building the Future...
            </h2>
            <p className="font-normal font-[zenkaku] text-base text-white">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};
export default Slide;
