import React, { useState } from "react";
import { cn } from "../lib/utils";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const Input = ({ type, label, field, value, ...props }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="relative group *:transition-all *:duration-100">
      {/* input floating label */}
      <label
        className={cn("floating-label", value ? "text-[13px] top-0" : "")}
        htmlFor={label}
      >
        {label}
      </label>

      {/* field prop make input cotrolled */}
      <input
        {...field}
        {...props}
        id={label}
        className="outline-none text-base font-normal px-4 py-3 w-full h-14 rounded-lg border border-[rgb(189,189,189)] group-focus-within:border-[rgba(66,66,66)]"
        type={isHidden ? type : "text"}
      />

      {/* if password is and his type if password hidden shows outlined eye icon, 
        else if password is hiddend but also his type is password 
        show off outlined eye icon, else show nothing */}

      {type === "password" && isHidden ? (
        <IoEyeOutline
          onClick={() => setIsHidden(!isHidden)}
          className="absolute top-1/2 -translate-y-1/2 right-2 text-base text-[rgb(190,190,190)] cursor-pointer"
        />
      ) : (
        type === "password" && (
          <IoEyeOffOutline
            onClick={() => setIsHidden(!isHidden)}
            className="absolute top-1/2 -translate-y-1/2 right-2 text-base text-[rgb(190,190,190)] cursor-pointer"
          />
        )
      )}
    </div>
  );
};
export default Input;
