import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Briefcase() {
    return(
        <div className="briefcase-section">
            <h1>This is the briefcase</h1>
        </div>
    )
}
/*
import React ,{useState, useEffect} from "react";
import { navigate } from 'hookrouter';
import Cookies from 'js-cookie';


    const [users_id, setUsersId] = useState('');
    const [products_id, setProductsId] = useState('');
    const [products_title, setProductsTitle] = useState('');
    const [products_image, setProductsImage] = useState('');
    const [products_description, setProductsDescription] = useState('');
    const [products_price, setProductsPrice] = useState('');
    const [prodcuts_category, setProductsPrice] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddClick = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:5000/user/get/<id>', {
            method: "GET",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify({
                users_id
            })
        })
        .then(
            Cookies.set('users_id', users_id)
        )
        .catch(error => {
            console.log('Error creating your user', error);
            setError(true);
            setErrorMessage('Error adding user! Try again please.');
        })

        fetch('http://127.0.0.1:5000/products/get', {
            method: "GET",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify({
                products_id,
                products_title,
                products_image,
                products_description,
                products_price,
                prodcuts_category
            })
        })

        .then(data => {
            if(data === 'Error: Data must be JSON'){
                setError(true);
                setErrorMessage('Error: Data must be JSON');
            } else {
                setError(false);
                setErrorMessage('');
                Cookies.set('products_id', products_id);
                Cookies.set('products_title', products_title);
                Cookies.set('products_image', products_image);
                Cookies.set('products_description', products_description);
                Cookies.set('products_price', products_price);
                Cookies.set('products_category', prodcuts_category);
                navigate('/');
            }
        })

        .catch(error => {
            console.log('Error in adding product information', error);
            setError(true);
            setErrorMessage('Error adding product! Try again.');
        });
    }


    useEffect(() => {
        setError(false);
        setErrorMessage('');
    },[users_id, products_id, products_title, products_image, products_description, products_price, prodcuts_category])

    return(
        <div className="checkout">
            <div className='sign-up-form-container'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='part-one'>
                        <input type='text' placeholder='First Name' name='users_first_name' onChange={(e) => setUsersFirstName(e.target.value)}/>
                        <input type='text' placeholder='Middle Name' name='users_middle_name' onChange={(e) => setUsersMiddleName(e.target.value)}/>
                        <input type='text' placeholder='Last Name' name='users_last_name' onChange={(e) => setUsersLastName(e.target.value)}/>
                        <input type='date' placeholder='Birthday' name='users_birthday' onChange={(e) => setUsersBirthday(e.target.value)}/>
                    </div>
                    <div>
                        <input type='eamil' placeholder='Email' name='users_email' onChange={(e) => setUsersEmail(e.target.value)}/>
                        <input type='text' placeholder='Username' name='users_name' onChange={(e) => setUsersName(e.target.value)}/>
                        <input type='text' placeholder='Password' name='users_password' onChange={(e) => setUsersPassword(e.target.value)}/>
                        <input type="text" placeholder="Confirm Password" value={confirmPassword} name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                    <button className='submit-btn' type='submit'>Submit</button>
                </form>
                <h6 style={{visibility: error ? 'visible' : 'hidden'}}>{errorMessage}</h6>
            </div>
        </div>
    )*/
