import React from 'react';
import LoginForm from '../../Forms/loginForm';
import LoginImg from '../../../../static/assets/Images/login.png'

console.log(LoginImg)

export default function Login() {
    return(
        <div className="login-section">
            <div className='login-img'>
                <img src={LoginImg} alt='login image' />;
            </div>
            <div className='login-form'>
                <LoginForm />
            </div>
        </div>
    )
}