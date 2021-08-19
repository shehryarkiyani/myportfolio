import React, { Component } from 'react';

import img1 from '../img/mypic.png'


export default function About() {
    return (
        <section className="section-padding about">
        <div className="container">
       <div id="aboutheading" className="row ">
           <div className="col-5"> </div>
           <div className="col-6 "><h3 className="about-h3" >About Me</h3></div>
       </div>
        <div className="row">
            <div id="myimage" className="col-md-5 img-container ">
                <img src={img1} className="img-fluid " alt="" width="300px" height="300px"></img>
            </div>
            <div id="myintro" className="col-md-7 second-row ">
        
                <p className="lead about-para">
                Hi, My Name is Shehryar Rauf Kiyani and i am a full stack web developer.
                My main focus is to provide you with the perfect website according to your imagination and to make sure you are highly satisfied with the web design/layout.
                I use all the latest technology like HTML5, CSS3, JavaScript, jQuery and bootstrap, PHP , React etc. to provide you with a responsive and fully functional website compatible with all types of browsers. 
</p>
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Personal Details</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Education</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  <p className="lead about-list">
    <ul>
        <li>From : Rawalpindi</li>
        <li>Age : 21</li>
        <li>Gender : Male</li>
        <li>Nationality : Pakistani</li>
       
    </ul>
</p>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

  <p className="lead about-list">
    <ul>
        <li>Matric</li>

    </ul>
</p>
<p className="lead about-para mypara">
               Sir Syed Public School Rawalpindi (2016)
               </p>
<p className="lead about-list">
    <ul>
        <li>Intermediate</li>

    </ul>
</p>
<p className="lead about-para mypara">
               Punjab College of Information Technology (2016-2018)
               </p>
<p className="lead about-list">
    <ul>
        <li>BS(CS)</li>

    </ul>
</p>
<p className="lead about-para mypara">
               Comsats University Islamabad (2018-2022)
               </p>
  </div>

  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
  <p className="lead about-list">
    <ul>
        <li>Email</li>

    </ul>
</p>
<p className="lead about-para mypara">
               shehryarkiani121@gmail.com
               </p>
               <p className="lead about-list">
    <ul>
        <li>Phone Number</li>

    </ul>
</p>
<p className="lead about-para mypara">
               +923315866992
               </p>

  </div>
</div>

           
            
        <div className="social-icons">
            <a target="_blank" href="https://www.facebook.com/shehryar.kiyani.16/"><i className="fa fa-facebook" ></i></a>
           
            <a target="_blank" href="https://www.fiverr.com/digi_developers?up_rollout=true" className="fiver"> <i >fi</i></a>
          
            <a target="_blank" href="https://www.instagram.com/shehryar_kiyani/?hl=en"><i className="fa fa-instagram" aria-hidden="true"></i></a>
          
        </div>
        
        
        </div>
        </div>
        </div>
            </section>
    )
}

