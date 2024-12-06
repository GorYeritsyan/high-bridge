import React from "react";

const Checkbox = ({ field }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center space-x-[5px]">
        <label className="text-xs font-medium flex justify-center items-center space-x-[5px]">
          <input
            {...field}
            className="cursor-pointer hover:bg-[rgb(215,215,215)] checked:bg-[rgb(215,215,215)] checked:hover:bg-[rgb(210,210,210)] bg-[rgb(224,224,224)] appearance-none w-[22px] h-[22px] rounded-sm border-none text-white
          checked:after:content-checkbox flex items-center justify-center"
            type="checkbox"
          />
          <span className="cursor-pointer">Remember me</span>
        </label>
      </div>

      <a className="text-[rgb(66,66,66)] text-xs font-semibold hover:underline cursor-pointer">
        Forgot Password?
      </a>
    </div>
  );
};

export default Checkbox;
