import React from 'react';
import { A } from 'hookrouter';

export default function NavBar() {
    return (
        <div className='navigation-container'>
            <div className='nav-link-wrapper'>
                <div className='nav-link'>
                    <A className='link' href='/'>
                        Home
                    </A>
                </div>

                <div className='nav-link'>
                    <A className='link' href='/about'>
                        About
                    </A>
                </div>

                <div className='nav-link'>
                    <A className='link' href='/login'>
                        Login
                    </A>
                </div>

                <div className='nav-link'>
                    <A className='link' href='/blog'>
                        Blog
                    </A>
                </div>
                <div className='nav-link'>
                    <A className='link' href='/Search'>
                        search
                    </A>
                </div>
                <div className='nav-link'>
                    <A className='link' href='/services'>
                        Services
                    </A>
                </div>
                <div className='nav-link'>
                    <A className='link' href='/contact'>
                        Contact
                    </A>
                </div>
            </div>
        </div>
    );
} 