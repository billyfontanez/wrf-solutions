import React from 'react';
import headshot from '../../../static/assets/Headshots/headshot.trans-bg.png';

console.log(headshot);


export default function Home() {
    return(
        <div className="home-section">
            <div className='about-us'>
                <div className='left-side'>
                    <div classname='about-us-words'>
                        <div className='title'>
                            <h1>About Us</h1>
                        </div>
                        <div className='about-us-description'>
                            <div>
                                <h3 className ='top'>
                                    Hello Everyone!!! My name is William Fontanez and I am the creator off WRF Solutions. Why did I create WRF Solutions? Well before 
                                    I answer that  let me tell you a little about myself. I have a Bachelor of Science in Health Sciences, Bachelor of Arts in Psychology, 
                                    Certification of Competency in Software Development, and a Certificate of Completion in Scrum and Agile. Along with many different types 
                                    of trainings. Over the past 17 years I have worked in many types of industrys. Some of these industries are in
                                    Healthcare, Nonprofit, Construction, Computer, Food, Hospitality, and Telecommunications. And, I have also been in the army reserves for 13 years.
                                </h3>
                                <h3 className='bottom'>
                                    The reason why I started WRF Solutions is because I want to help people succced in life. As you can tell I am a very busy guy and 
                                    have over 17 years of experieance in diverse fields that allows me to look at a problem at different perspectives. 
                                    Which allows me to think outside the box and come up with different solutions. So let WRF Solutions BRING BETTER SOLUTIONS TO YOUR PROBLEMS.
                                    Plus we have a free 30 minute Consuting session and who doesnt like FREE!!!
                                </h3>
                            </div>
                        </div>
                    </div>
                    </div>
                <div className='headshot-image'>
                    <img src={headshot} alt='William Fontanez headshot' />; 
                </div>
            </div>
        </div>
    )
}