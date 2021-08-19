import React, { Component,useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
    Pagination
  } from 'swiper/core';
  SwiperCore.use([Pagination]);
export default function Skills() {
    return (
        <>
             <section className="skills">
       <div className="container">
        <div id="myskills" className="row ">
            <div className="col-5"> </div>
            <div className="col-6 "><h3 className="skills-h3" >My Skills</h3></div>
        </div>
        <Swiper spaceBetween={30}  pagination={{
  "clickable": true
}} className="mySwiper">
  <SwiperSlide> 
  <div className="mycard">
     <h2 className="skills-h2">Development Skills</h2>
     <ul>
             <li>                 <h6>HTML,CSS,Javascript</h6>
                 <div className="progress-content">
                     <div className="skill-progress1" data-progress="90"></div>
                 </div>
             </li>
               
             <li>
                 <h6>Bootstrap</h6>
                 <div className="progress-content">
                        <div className="skill-progress1" data-progress="100"></div>
                 </div>
             </li>
             <li>
                 <h6>PHP,MSQL</h6>
                 <div className="progress-content">
                         <div className="skill-progress1" data-progress="85"></div>
                 </div>
                 </li>
               <li>
                     <h6>React js</h6>
                     <div className="progress-content">
                         <div className="skill-progress1" data-progress="95"></div>
                     </div>
                 </li>
                 <li>
                     <h6>Wordpress</h6>
                     <div className="progress-content">
                         <div className="skill-progress1" data-progress="95"></div>
                     </div>
                 </li>
               
                
             </ul>
  
     </div>
      </SwiperSlide>
  <SwiperSlide>
  <div className="mycard">
     <h2 className="skills-h2">Design Skills</h2>
     <ul>
             <li>                 <h6>Photoshop</h6>
                 <div className="progress-content">
                     <div className="skill-progress1" data-progress="60"></div>
                 </div>
             </li>
               
             <li>
                 <h6>Illustrator</h6>
                 <div className="progress-content">
                        <div className="skill-progress1" data-progress="70"></div>
                 </div>
             </li>
             <li>
                 <h6>Adobe XD</h6>
                 <div className="progress-content">
                         <div className="skill-progress1" data-progress="90"></div>
                 </div>
                 </li>
               <li>
                     <h6>Web Design</h6>
                     <div className="progress-content">
                         <div className="skill-progress1" data-progress="80"></div>
                     </div>
                 </li>
               
                
             </ul>
  
     </div>
       </SwiperSlide>
  
  </Swiper>
      
   
       


        </div>
        </section>
        
        </>



    
    )
}