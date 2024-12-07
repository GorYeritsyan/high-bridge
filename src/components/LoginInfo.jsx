import React from "react";
import Slide from "./Slide.jsx";

const LoginInfo = () => {
  return (
    <div className="flex flex-col justify-between h-[380px]">

      {/* logo */}
      <img
        src="/src/assets/images/logo_highbridge.svg"
        alt="logo highbridge"
        width={274}
      />

      {/* carousel that shows some info */}
      <Slide />
    </div>
  );
};
export default LoginInfo;
