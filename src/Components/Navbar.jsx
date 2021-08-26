import React, { Component } from 'react';

import { Link } from 'react-scroll';
export default function Navbar() {
    return (
        <header className="myheader">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-dark ">
                    <a href="#" className="navbar-brand">SRK</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                    <div className="collapse navbar-collapse " id="menu">
                        <ul className="navbar-nav margin-left ">
                            <li className="nav-item active"><Link to="main-section" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="about" className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to="skills" className="nav-link">Skills</Link></li>
                            <li className="nav-item"><Link to="services" className="nav-link">Services</Link></li>
                            <li className="nav-item"><Link to="portfolio" className="nav-link">Sample Work</Link></li>
                            <li className="nav-item"><Link to="contactsection" className="nav-link">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    )
}
