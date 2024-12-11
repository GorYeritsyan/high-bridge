import React from "react";

const TotalInfo = ({ title, image, amount }) => {
  return (
    <div className="flex items-center space-x-[15px]">
      <img src={image} alt="total info icon" />
      <div>
        <h4 className="text-[rgb(113,142,191)] text-base">{title}</h4>
        <span className="font-semibold text-[25px] text-[rgb(35,35,35)]">
          {amount}
        </span>
      </div>
    </div>
  );
};
export default TotalInfo;
