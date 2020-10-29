import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Temple from '../../components/Header/assets/Temple.jpg';
import Sai from '../../components/Header/assets/Sai.jpg';
import Mandabam from '../../components/Header/assets/Mandabam.jpg';

import classes from './DemoCarosel.module.css'

class DemoCarosel extends React.Component {
    render() {
        const settings = {
            dots: false,
            arrows:false,
            infinite: true,
            autoplay: true,
            speed: 1500,
            focusOnSelect: false,
            pauseOnHover: false,
            autoplaySpeed: 4500,
            cssEase: "linear",
            slidesToShow: 1,
            slidesToScroll: 1,
           
          };
        return (
            <div className={classes.container}>
        <Slider {...settings}>
          <div className={classes.imageContainer}>
            <img src={Sai} alt='saiimage' className={classes.image} />
          </div>
          <div className={classes.imageContainer}>
            <img src={Temple} alt='templeimage' className={classes.image} />
          </div>
          <div className={classes.imageContainer}>
            <img src={Mandabam} alt='mandabamimage' className={classes.image} />
          </div>
        

          
        </Slider>
        <marquee>
          <span>
          <p style={{color:'#EE4E34'}}> "We need His grace to have His Blessings"  &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; "My Love for all is Same but My Grace is not the Same" - Bhagawan  Baba
 </p> 
         
          </span>
        </marquee>
      </div>
        )
    }
   
}

export default DemoCarosel
