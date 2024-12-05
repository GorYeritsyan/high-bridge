import React from "react";
import Slide from "./Slide.jsx";

const LoginInfo = () => {
  return (
    <div className="flex flex-col justify-between h-[350px]">
      <img
        src="/src/assets/images/logo_highbridge.png"
        alt="logo highbridge"
        width={274}
      />
      <Slide />
    </div>
  );
};
export default LoginInfo;
