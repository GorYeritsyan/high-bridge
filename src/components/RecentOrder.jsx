import React from "react";
import { imageBaseUrl } from "@/components/Sidebar.jsx";
import { cn } from "@/lib/utils.js";
import Amount from "@/components/Amount.jsx";

const RecentOrder = ({ title, image, orderDate, orderAmount }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex-center space-x-4 ">
        <img src={imageBaseUrl + image} alt="order icon" />
        <div className="flex flex-col ">
          <h3 className="text-base text-[rgb(35,35,35)] font-medium">
            {title}
          </h3>
          <p className="text-[rgb(113,142,191)] text-[15px] font-normal">
            {orderDate}
          </p>
        </div>
      </div>
      <Amount amount={orderAmount} />
    </div>
  );
};
export default RecentOrder;
