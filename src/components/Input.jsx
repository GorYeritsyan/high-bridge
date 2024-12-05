import React from "react";

const Input = ({ label }) => {
  return (
    <div className="relative group ">
      <label
        className="group-focus-within:top-0 group-focus-within:text-[13px] group-focus-within:text-[rgba(66,66,66)] text-[rgb(117,117,117)] transition-all duration-0.75 ease-linear cursor-pointer font-normal px-[10px] bg-white flex justify-center items-center absolute top-1/2 -translate-y-1/2 left-3 text-base"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        id={label}
        className="outline-none text-base font-normal px-4 py-3 w-full h-14 transition-all duration-0.75 ease-linear rounded-lg border border-[rgb(189,189,189)] group-focus-within:border-[rgba(66,66,66)]"
        type="text"
      />
    </div>
  );
};
export default Input;
