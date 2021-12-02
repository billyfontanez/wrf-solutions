import React, { Component } from "react";
import Logo from '../../../static/assets/Logos/WRF3-240x240.gif';

console.log(Logo);

export default class Header extends Component{
    render(){
        return (
            <div className='logo'>
                <img src='../../../static/assets/Logos/WRF3-240x240.gif' alt='logo'/>
            </div>
        );
    }
}