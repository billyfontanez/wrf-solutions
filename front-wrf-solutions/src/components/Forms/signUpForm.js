import React ,{useState, useEffect} from "react";
import { navigate } from 'hookrouter';
import Cookies from 'js-cookie';

export default function SignUpForm() {
    const [users_first_name, setUsersFirstName] = useState('');
    const [users_middle_name, setUsersMiddleName] = useState('');
    const [users_last_name, setUsersLastName] = useState('');
    const [users_birthday, setUsersBirthday] = useState('');
    const [users_name, setUsersName] = useState('');
    const [users_email, setUsersEmail] = useState('');
    const [users_password, setUsersPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(users_name === '' || users_email === '' || users_password === '' || confirmPassword === '') {
            setError(true);
            setErrorMessage('Error: All fields must be filled in!');
        } else if(users_password !== confirmPassword) {
            setError(true);
            setErrorMessage('Error: The passwords are not the same. ');
        } else {
            fetch('http://127.0.0.1:5000/user/add', {
                method: "POST",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify({
                    users_first_name,
                    users_middle_name,
                    users_last_name,
                    users_birthday,
                    users_name,
                    users_email,
                    users_password
                })
            })
            .then(data => {
                if(data === 'Error: That username is taken.') {
                    setError(true);
                    setErrorMessage('Error: That username is taken.');
                }else if(data === 'Error: That email has been taken') {
                    setError(true);
                    setErrorMessage('Error: That email has been taken');
                }
                else {
                    setError(false);
                    setErrorMessage('');
                    Cookies.set('users_name', users_name);
                    Cookies.set('users_email', users_email);
                    navigate('/');
                }
            })
            .catch(error => {
                console.log('Error creating your user', error);
                setError(true);
                setErrorMessage('Error adding user! Try again please.');
            })
        }

    }

    useEffect(() => {
        setError(false);
        setErrorMessage('');
    },[users_name, users_email, users_password, confirmPassword])

    return(
        <div className="sign-up-form-section">
            <div className='sign-up-form-container'>
                <form className='part-one' onSubmit={(e) => handleSubmit(e)}>
                    <input type='text' placeholder='First Name' name='users_first_name' onChange={(e) => setUsersFirstName(e.target.value)}/>
                    <input type='text' placeholder='Middle Name' name='users_middle_name' onChange={(e) => setUsersMiddleName(e.target.value)}/>
                    <input type='text' placeholder='Last Name' name='users_last_name' onChange={(e) => setUsersLastName(e.target.value)}/>
                    <input type='date' placeholder='Birthday' name='users_birthday' onChange={(e) => setUsersBirthday(e.target.value)}/>
                </form>
                <form className='part-two'>
                    <input type='eamil' placeholder='Email' name='users_email' onChange={(e) => setUsersEmail(e.target.value)}/>
                    <input type='text' placeholder='Username' name='users_name' onChange={(e) => setUsersName(e.target.value)}/>
                    <input type='text' placeholder='Password' name='users_password' onChange={(e) => setUsersPassword(e.target.value)}/>
                    <input type="text" placeholder="Confirm Password" value={confirmPassword} name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}/>
                </form>
                <h6 style={{visibility: error ? 'visible' : 'hidden'}}>{errorMessage}</h6>
            </div>
        </div>
    )
}