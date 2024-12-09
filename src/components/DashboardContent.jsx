import React from "react";
import { cn } from "../lib/utils.js";

const DashboardContent = ({ title, grow, content }) => {
  return (
    <div className={cn("flex flex-col space-y-4")}>
      <h2 className="text-[22px] text-[rgb(52,60,106)] font-semibold">
        {title}
      </h2>
      <div className={`flex w-full rounded-custom h-full  bg-white`}>
        {content}
      </div>
    </div>
  );
};
export default DashboardContent;
