import React from "react";

export default function ContactForm(){
    return(
        <div className="contact-form-section">
            <div className='contact-form'>
                <form>
                    <input type='text' placeholder='Name' name='contact_name' />
                    <input type='Email' placeholder='Email' name='contact_email' />
                    <textarea type='textbox' placeholder='Message' name='contact_message' />
                </form>
            </div>
        </div>
    )
}