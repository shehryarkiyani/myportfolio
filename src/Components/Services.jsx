import React, { Component } from 'react';
import { Card } from './Card';
import psd from '../img/psdtow.jpg'
import pic2 from '../img/PtoH.jpg'
import pic1 from '../img/web.jpg'
import pic3 from '../img/wd.jpg'
import pic4 from '../img/uiux.jpg'
function Services() {
    return (
        <section className="section-padding services">
            <div className="container">
       <div  className="row ">
           <div className="col-5"> </div>
           <div className="col-6 "><h3 className="services-h3" >Services</h3></div>
       </div>
       <div className="service-content">
          <div className="row">
             
          <Card servicename="Web Design" icon="fa fa-laptop"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque modi numquam sequi incidunt ullam, sed dolore nulla nisi veniam consequuntur, nostrum non animi! Quo obcaecati error amet deserunt, necessitatibus ut." img={pic1}/>
          <Card servicename="PSD To HTML" icon="fa fa-list-ul"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque modi numquam sequi incidunt ullam, sed dolore nulla nisi veniam consequuntur, nostrum non animi! Quo obcaecati error amet deserunt, necessitatibus ut." img={pic2}/>
          <Card servicename="Web Development" icon="fa fa-briefcase"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque modi numquam sequi incidunt ullam, sed dolore nulla nisi veniam consequuntur, nostrum non animi! Quo obcaecati error amet deserunt, necessitatibus ut." img={pic3}/>
             
              <Card servicename="PSD To Wordpress" icon="fa fa-empire"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque modi numquam sequi incidunt ullam, sed dolore nulla nisi veniam consequuntur, nostrum non animi! Quo obcaecati error amet deserunt, necessitatibus ut." img={psd}/>
             
              <Card servicename="UI/UX Design" icon="fa fa-envira"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque modi numquam sequi incidunt ullam, sed dolore nulla nisi veniam consequuntur, nostrum non animi! Quo obcaecati error amet deserunt, necessitatibus ut." img={pic4}/>
             

          </div>
       </div>

       </div>
            </section>
    )
}

export default Services
