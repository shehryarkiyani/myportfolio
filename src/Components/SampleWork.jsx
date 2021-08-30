import React, { Component,useState } from 'react';
import mywork from './Work';
import $ from 'jquery'
export default function SampleWork() {
const[items,setitems]=useState(mywork)
const ChangeTab=(event)=>{
var id=event.target.getAttribute('data-id')
var c=event.target.getAttribute('data-category')
     let getitems=''
     
        if(c!=='All'){
            getitems=mywork.filter((curr)=>{
                return curr.category==c
            })
        }else{
             getitems=mywork
        }
        setitems(getitems)
        $('.tabs').each(function(){
           var h=$(this).data('id');
            
           if(h==id){
            if($('.tabs[data-id='+id+']').hasClass('active-tab')){
               
            }else{
                $('.tabs[data-id='+id+']').addClass('active-tab')
                
            }
           }else{
            $('.tabs[data-id='+h+']').removeClass('active-tab')
           }
       })
    
    
}
    
    return (
       <section className="section-padding portfolio">
           <div className="container">
               <div className="row">
                   <div className="section-header text-center">
                       <h3 className="work-heading">My Work</h3>
                   </div>
               </div>
               <div className="row work-tabs" >
                   <ul>
                       <li><a  className="tabs active-tab" data-category="All" data-id="1" onClick={ChangeTab}  >All</a></li>
                       <li><a  className="tabs" data-category="Web Design" data-id="2" onClick={ChangeTab}  >Web Design</a></li>
                       <li><a  className="tabs" data-category="Web Development" data-id="3"  onClick={ChangeTab} >Web Development</a></li>
                   </ul>
               </div>
               <div className="row">
                   {
                   items.map((elem)=>{
                       const {category,img}=elem
                       return(
                        <div className="col-md-4 my-item">
                            <div className="portfolio-item">
                             <div className="item-content text-center">
                <img src={img} alt=""  height="300px" width="100%" />
                <div className="img-overlay d-flex align-items-center">
<div className="info full-width">
<div className="description">{category}</div>

</div>
                </div>
                </div>
            </div>
                        </div>
                       )
                   })}
               </div>
               </div>
       </section>
    )
}
