import React, { Component } from 'react';


export default function Contact() {
    return (
        <section className="section-padding contact contactsection">
            <div className="container">
                <div className="row">
                    <div className="section-header full-width text-center" id="Mycontact">
                        <h3>Contact</h3>
                    </div>
                </div>
                
                    <div className="contact-top  text-center">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-location"><i className="fa fa-location-arrow"></i> Address</div>
                            <p>4,MuslimAbad,Rawalpindi</p>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-location"><i className="fa fa-envelope"></i> Email</div>
                            <p>shehryarkiani121@gmail.com</p>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-location"><i className="fa fa-phone"></i> Phone</div>
                            <p>+923315866992</p>
                        </div>
                    </div>
                </div>
                
                <div className="contact-form">
                <form action="shehryarkiani121@gmail.com" encType="text/plain" method="post">
                    <div className="row">
                        <div className="col-md-6">
                    <input type="text" id="name" name="name" placeholder="Enter Name" />
                        </div>
                        <div className="col-md-6">
                        <input type="text" id="name" name="email" placeholder="Enter Your Email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter Message"></textarea>
                            <input type="submit" className="" id="submit" value="Submit"/>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
