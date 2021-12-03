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
            fetch('postgresql://sxirmnwztxyerk:37a222f1240fa7b938db0d42643216dfed5ceaf121c019fbd1b2929790db7912@ec2-3-220-240-189.compute-1.amazonaws.com:5432/d3s6d7m46m135k/user/add', {
                method: "POST",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify({
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
                }
            })
            .catch(error => {
                console.log('Error creating your user', error);
                setError(true);
                setErrorMessage('Error adding user! Try again please.');
            })
        }

        fetch('postgresql://sxirmnwztxyerk:37a222f1240fa7b938db0d42643216dfed5ceaf121c019fbd1b2929790db7912@ec2-3-220-240-189.compute-1.amazonaws.com:5432/d3s6d7m46m135k/users-info/add', {
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify({
                users_first_name,
                users_middle_name,
                users_last_name,
                users_birthday,
            })
        })

        .then(data => {
            if(data === 'Error: Data must be JSON'){
                setError(true);
                setErrorMessage('Error: Data must be JSON');
            } else {
                setError(false);
                setErrorMessage('');
                Cookies.set('users_first_name', users_first_name);
                Cookies.set('users_middle_name', users_middle_name);
                Cookies.set('users_last_name', users_last_name);
                Cookies.set('users_birthday', users_birthday);
                navigate('/');
            }
        })

        .catch(error => {
            console.log('Error in adding user information', error);
            setError(true);
            setErrorMessage('Error adding user! Try again.');
        });
    }


    useEffect(() => {
        setError(false);
        setErrorMessage('');
    },[users_name, users_email, users_password, confirmPassword, users_first_name, users_middle_name, users_last_name, users_birthday])

    return(
        <div className="sign-up-form-section">
            <div className='sign-up-form-container'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='sign-up-input'> 
                        <input type='text' placeholder='First Name' name='users_first_name' onChange={(e) => setUsersFirstName(e.target.value)}/>
                        <input type='text' placeholder='Middle Name' name='users_middle_name' onChange={(e) => setUsersMiddleName(e.target.value)}/>
                        <input type='text' placeholder='Last Name' name='users_last_name' onChange={(e) => setUsersLastName(e.target.value)}/>
                        <input type='date' placeholder='Birthday' name='users_birthday' onChange={(e) => setUsersBirthday(e.target.value)}/>
                    </div>
                    <div className='sign-up-input'>
                        <input type='email' placeholder='Email' name='users_email' onChange={(e) => setUsersEmail(e.target.value)}/>                 
                        <input type='text' placeholder='Username' name='users_name' onChange={(e) => setUsersName(e.target.value)}/>
                        <input type='text' placeholder='Password' name='users_password' onChange={(e) => setUsersPassword(e.target.value)}/>
                        <input type="text" placeholder="Confirm Password" value={confirmPassword} name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                    <div className='submit-btn'>
                        <button className='btn' type='submit'><h1>Submit</h1></button>
                    </div>
                </form>
                <h6 style={{visibility: error ? 'visible' : 'hidden'}}>{errorMessage}</h6>
            </div>
        </div>
    )
}