import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import '../node_modules/font-awesome/css/font-awesome.min.css'

import Hero from './Components/Hero'
import About  from './Components/About';
import { Route,Switch } from 'react-router-dom';
import Skills from './Components/Skills';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import SampleWork from './Components/SampleWork';
import $ from 'jquery'
class App extends Component{
  componentDidMount(){
    window.scrollTo(0, 0)
    $(window).scroll(function(){
      var top=$(window).scrollTop();
     
      if(top>=200){
        $('header').addClass('overlay')
      }else{
        $('header').removeClass('overlay')
      }
      if(top>=281){
        $('#myimage').addClass('animate__animated animate__slideInLeft')
        $('#myintro').addClass('animate__animated animate__slideInRight')
        $('#aboutheading').addClass('animate__animated animate__slideInDown')
      }
      if(top>=1060){
        $('#myskills').addClass('animate__animated animate__slideInDown')
        $('.skills-h2').addClass('animate__animated animate__slideInLeft')
        $('.progress-content .skill-progress1').each(function(){
          var val=$(this).attr('data-progress');
              $(this).css('width',''+val+'%')
         
        })
      }
      if(top>=1260){
    
        $('.services-h3').addClass('animate__animated animate__slideInDown')
      }
      if(top>=1268){
        $('.service-single').addClass('animate__animated animate__zoomIn')
      }
      if(top>=2438){
        $('#Mycontact').addClass('animate__animated animate__slideInDown')
        $('.contact-top').addClass('animate__animated animate__slideInDown')
      }
      
    })
    
   
    
    
  }
  render(){
    return(
      <>
     
       <Navbar/>
       
       <Hero/>
       <About/>

    <Skills/>
  <Services/>
  <SampleWork/>
    <Contact/>
   <Footer/>
     
      </>
    )
  }
}
export default App;
