import React from "react";
import LoginInfo from "../components/LoginInfo.jsx";
import Login from "../components/Login.jsx";
import Container from "../components/Container.jsx";

const LoginPage = () => {
  return (
    <div className="login-background overflow-hidden">
      <div className="w-full h-full bg-gradient-to-tr from-[rgba(33,33,33,0.84)] to-[rgba(66,66,66,0.24)]">
        <Container>
          <div className="flex justify-center items-center space-x-16 h-screen">
            <LoginInfo />
            <Login />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default LoginPage;
