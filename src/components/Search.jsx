import React from "react";

const Search = () => {
  return (
    <div className="relative">
      <img
        className=" cursor-pointer absolute top-1/2 -translate-y-1/2 left-6"
        src="/src/assets/images/search-icon.svg"
        alt="search icon"
      />
      <input
        className="header-items rounded-[40px] w-[255px] py-3 pl-[60px] pr-6 border-none outline-none
             placeholder:text-[15px] placeholder:text-[rgb(139,163,203)]
             text-[15px] text-[rgb(139,163,203)]"
        type="text"
        placeholder="Search for something"
      />
    </div>
  );
};
export default Search;
