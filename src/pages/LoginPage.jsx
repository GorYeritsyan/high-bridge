import React from 'react'
import LoginInfo from "../components/LoginInfo.jsx";
import Login from "../components/Login.jsx";
import Container from "../components/Container.jsx";

const LoginPage = () => {
    return (
        <div className="login-background overflow-hidden">
           <Container>
               <div className='flex justify-center items-center space-x-16 h-screen'>
                   <LoginInfo />
                   <Login />
               </div>
           </Container>
        </div>
    )
}
export default LoginPage
