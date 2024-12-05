import React from 'react'
import LoginInfo from "../components/LoginInfo.jsx";
import Login from "../components/Login.jsx";
import Container from "../components/Container.jsx";

const LoginPage = () => {
    return (
        <div className="login-background">
           <Container>
               <div className='flex justify-center items-center h-screen'>
                   <LoginInfo />
                   <Login />
               </div>
           </Container>
        </div>
    )
}
export default LoginPage
