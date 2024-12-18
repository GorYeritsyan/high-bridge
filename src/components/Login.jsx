import React from "react";
import Input from "./Input.jsx";
import LoginForm from "./LoginForm.jsx";

const Login = () => {
  return (
    <div className="flex flex-col w-[460px] h-[768px] p-10 relative top-[132px] bg-white rounded-t-[24px] space-y-7 self-end">
      <div className="h-[67px] flex flex-col justify-around">
        <h5 className="text-[13px] text-black">WELCOME BACK</h5>
        <h2 className="font-bold text-[25px] text-black">
          Log In to your Account
        </h2>
      </div>
      <LoginForm />
    </div>
  );
};
export default Login;
