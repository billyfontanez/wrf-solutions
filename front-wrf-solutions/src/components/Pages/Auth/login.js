import React, { useState, useEffect } from 'react';

export default function Login() {
    return(
        <div className="login-section">
            <div className='login'>
                <form>
                    <input type='text' placeholder='Username or Email' name='users_name,users_email' />
                    <input type='text' placeholder='Password' name='users_password' />
                </form>
            </div>
        </div>
    )
}