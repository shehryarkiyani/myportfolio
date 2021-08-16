import React, { Component } from 'react';


import Typed from 'react-typed';
export default function Hero() {
    return (
        <section  className="main d-flex justify-content-center" id="main-section">
        
        <div className="main-content align-self-center">
            <div className="welcome">Welcome</div>
            <div className="type">I am <span >
            
            <Typed
                    strings={['Shehryar Kiyani','A Web Developer']}
                    typeSpeed={20}
                    backSpeed={20}
                    loop={true}
                    backDelay={1000}
                />
                </span> </div>
            
           
        </div>
        
    </section>
    )
}
