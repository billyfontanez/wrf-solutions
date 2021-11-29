import React from 'react';
import { A } from 'hookrouter';

export default function NavBar() {
    return (
        <div className='nav-section'>
            <div className='nav-link-container'>
                <div className='nav-link'>
                    <A className='link' href='/'>
                        Home
                    </A>
                </div>

                <div className='nav-link'>
                    <A className='link' href='/login'>
                        Login
                    </A>
                </div>

                <div className='nav-link'>
                    <A className='link' href='/sign-up'>
                        SignUp
                    </A>
                </div>

                <div className='nav-link'>
                    <A className='link' href='/search'>
                        Search
                    </A>
                </div>

                <div className='nav-link'>
                    <A className='link' href='/services'>
                        Services
                    </A>
                </div>

                <div className='nav-link'>
                    <A className='link' href='/briefcase'>
                        Briefcase
                    </A>
                </div>
            </div>
        </div>
    );
} 