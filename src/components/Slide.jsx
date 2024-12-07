// data that will come later
const sliderContent = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: false },
];

// all slider logic will be added later
const Slide = () => {
  return (
    // slider content
    <div className="w-[380px] flex flex-col justify-between pt-6 h-[219px]">
      <div className="justify-center h-[169px] space-y-10">
        <h2 className="text-[39px] text-white font-[zenkaku] font-bold">
          Building the Future...
        </h2>
        <p className="font-normal font-[zenkaku] text-base text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>

      {/* dots for scrolling  */}
      <div className="flex space-x-2 items-center">
        {sliderContent.map((item) => (
          <div
            className={
              item.active
                ? "w-12 bg-white h-[5px] cursor-pointer"
                : "w-8 h-[2px] bg-[rgb(158,158,158)] cursor-pointer"
            }
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Slide;
