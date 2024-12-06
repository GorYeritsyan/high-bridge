import { Field } from "formik";
import React, { useState } from "react";
import { cn } from "../lib/utils";

const Input = ({ label, field, value, ...props }) => {
  return (
    <div className="relative group *:transition-all *:duration-100">
      <label
        className={cn(
          "group-focus-within:top-0 group-focus-within:text-[13px] group-focus-within:text-[rgba(66,66,66)] text-[rgb(117,117,117)]  cursor-text font-normal px-[10px] bg-white flex justify-center items-center absolute top-1/2 -translate-y-1/2 left-3 text-base",
          value ? "text-[13px] top-0" : ""
        )}
        htmlFor={label}
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        id={label}
        className="outline-none text-base font-normal px-4 py-3 w-full h-14 rounded-lg border border-[rgb(189,189,189)] group-focus-within:border-[rgba(66,66,66)]"
        type={label}
      />
    </div>
  );
};
export default Input;
