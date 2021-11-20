import React, { useState, useEffect } from 'react';
import { navigate } from 'hookrouter';
import Cookies from 'js-cookie';

export default function ContactForm() {
    const [contact_form_name, setContactFormName] = useState('');
    const [contact_form_email, setContactFormEmail] = useState('');
    const [contact_form_message, setContactFormMessage] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(contact_form_name === '' || contact_form_email === '' || contact_form_message === '') {
            setError(true);
            setErrorMessage('Error: All fields must be filled in!');
        } else {
            fetch('http://127.0.0.1:5000/contact-form/add', {
                method: "POST",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify({
                    contact_form_name,
                    contact_form_email,
                    contact_form_message
                })
            })
            .then(data => {
                if(data === 'Error: Data must be JSON') {
                    setError(true);
                    setErrorMessage('Error: Data must be JSON');
                }else{
                    setError(false);
                    setErrorMessage('');
                    Cookies.set('contact_form_name',contact_form_name);
                    Cookies.set('contact_form_email',contact_form_email);
                    Cookies.set('contact_form_message',contact_form_message);
                    navigate('/contact');
                }
            })
            .catch(error => {
                console.log('Error sending contact form, please try again.', error);
                setError(true);
                setErrorMessage('Error sending contact form, please try again.');
            })
        }

    }

    useEffect(() => {
        setError(false);
        setErrorMessage('');
    },[contact_form_name, contact_form_email, contact_form_message])

    return(
        <div className="contact-form-section">
            <div className='contact-form'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type='text' placeholder='Name' name='contact_form_name' onChange={(e) => setContactFormName(e.target.value)} />
                    <input type='Email' placeholder='Email' name='contact_form_email' onChange={(e) => setContactFormEmail(e.target.value)} />
                    <textarea type='textbox' placeholder='Message' name='contact_form_message' onChange={(e) => setContactFormMessage(e.target.value)} />
                    <button type='submit'>Submit</button>
                </form>
                <h6 style={{visibility: error ? 'visible' : 'hidden'}}>{errorMessage}</h6>
            </div>
        </div>
    )
}