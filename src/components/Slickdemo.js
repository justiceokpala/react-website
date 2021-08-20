import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import iphone12 from '../images/iphone12.jpg'; 
import iphone11progold from '../images/iphone11progold.jpg';
import iphone11promaxgreen from '../images/iphone11promaxgreen.jpg';
import Logo from '../images/Logo.jpg';

export class Slickdemo extends Component {  
    render() {  
        var settings = {  
          dots: true,  
          infinite: true,  
          speed: 500,  
          centerMode: true,  
          slidesToShow: 2,  
          slidesToScroll: 1  
          };  
          return (  
            
            <Slider {...settings} >  
              <div className="wdt">  
              <img  className="img" src= {iphone12} alt="pictures"/>  
              </div>  
              <div className="wdt">  
              <img style={{"height":"40px"}}   src= {iphone11progold} alt="" className="img"/>  
              </div> 
              <div className="wdt">  
              <img  className="img" src= {iphone11promaxgreen} alt=""/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {Logo} alt=""/>  
              </div >  
            </Slider>  
          
          );  
        }  
      }  
  
export default Slickdemo