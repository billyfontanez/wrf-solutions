import React from "react";

export default function SignUpForm(){
    return(
        <div className="sign-up-form-section">
            <div className='sign-up-form-container'>
                <form className='part-one'>
                    <input type='text' placeholder='First Name' name='users_first_name' />
                    <input type='text' placeholder='Middle Name' name='users_middle_name' />
                    <input type='text' placeholder='Last Name' name='users_last_name' />
                    <input type='date' placeholder='Birthday' name='users_birthday' />
                </form>
                <form className='part-two'>
                    <input type='eamil' placeholder='Email' name='users_email'/>
                    <input type='text' placeholder='Username' name='users_name'/>
                    <input type='text' placeholder='Password' name='users_password'/>
                </form>
            </div>
        </div>
    )
}