import React, { useState, useEffect } from 'react';
import { navigate } from 'hookrouter';
import Cookies from 'js-cookie';

export default function LoginForm() {
    const [users_name, setUsersName] = useState('');
    const [users_password, setUsersPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(users_name === '' || users_password === '') {
            setError(true);
            setErrorMessage('Error: All fields must be filled in!');
        } else {
            fetch('http://127.0.0.1:5000/user/verify', {
                method: "POST",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify({
                    users_name,
                    users_password
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data === 'User NOT verified.') {
                    console.log(data)
                    setError(true);
                    setErrorMessage('Invalid username or password.');
                } else {data === 'User has been verified.'
                    Cookies.set('users_name', users_name);
                    navigate('/');
                }
            })
            .catch(error => {
                console.log('Error with logging in.', error);
                setError(true);
                setErrorMessage('Error logging in, please try again.');
            })
        }

    }
 
    useEffect(() => {
        setError(false);
        setErrorMessage('');
    },[users_name, users_password])

//TODO add onChange={(e) => setUsersEmail(e.target.value)} to input so user can use email or username
    return (
        <div className="login-container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='login-form'>
                    <input className='input-container' type="text" placeholder="Username" value={users_name} name="users_name" onChange={(e) => setUsersName(e.target.value)} />
                    <input className='input-container' type="text" placeholder="Password" value={users_password} name="password" onChange={(e) => setUsersPassword(e.target.value)}/>
                </div>
                <div className='button-container'>
                    <button className='btn' type="submit"><h2>Submit</h2></button>
                </div>
            </form>
            <h6 style={{visibility: error ? 'visible' : 'hidden'}}>{errorMessage}</h6>
        </div>
    )
}