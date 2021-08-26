import React, { Component } from 'react';


export const Card = (props) => {
    return (
        <div className="col-md-4 text-center" >
              <div class="card" >
  <img class="card-img-top" src={props.img} alt="Card image cap" style={{width:'100%',height:'200px'}}/>
  <div class="card-body">
  <div className="icon-container d-flex justify-content-center">
                   <h5 className="service-icon ">
                       <i className={props.icon}></i>
                   </h5>
                      </div>
    <h5 class="service-name">{props.servicename}</h5>
    <p className="service-description">{props.description}</p>
         
  </div>
</div>
             
              </div>
    )
}
