import React from 'react';
import {Card} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Quotes extends React.Component {
    render(){
        const settings = {
            
            infinite: true,
            autoplay: true,
            arrows:false,
            speed: 2000,
            focusOnSelect: false,
            pauseOnHover: false,
            autoplaySpeed: 4000,
            cssEase: "linear",
           
            slidesToShow: 1,
            slidesToScroll: 1,
           
          };
          return (
            <div id='Divine Thoughts'>
                <Card>
      <Card.Header style={{backgroundColor:'#EE4E34',color:'white'}}>Divine Thoughts</Card.Header>
      
      <Card.Body>
      <Slider {...settings}>
        <blockquote className="blockquote mb-0">
          <p style={{color:'brown'}}>
            {' '}
            There is only one caste, the caste of humanity. 
            There is only one religion, the religion of love.
             There is only one language, the language of the heart.{' '}
          </p>
          <footer className="blockquote-footer">
             <cite title="Source Title">Sai Baba</cite>
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <p style={{color:'brown'}}>
            {' '}
            Before you speak, ask yourself: Is it kind? Is it necessary? Is it true? Does it improve the silence?{' '}
          </p>
          <footer className="blockquote-footer">
             <cite title="Source Title">Sai Baba</cite>
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <p style={{color:'brown'}}>
            {' '}
            Love one another and help others to rise to the higher levels, simply by pouring out love.
             Love is infectious and the greatest healing energy.{' '}
          </p>
          <footer className="blockquote-footer">
             <cite title="Source Title">Sai Baba</cite>
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <p style={{color:'brown'}}>
            {' '}
            Love all. Serve all. Help ever. Hurt never.{' '}
          </p>
          <footer className="blockquote-footer">
             <cite title="Source Title">Sai Baba</cite>
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <p style={{color:'brown'}}>
            {' '}
            Anger, ego, jealousy are the biggest diseases. Keep yourself aloof from these three diseases.{' '}
          </p>
          <footer className="blockquote-footer">
             <cite title="Source Title">Sai Baba</cite>
          </footer>
        </blockquote>
       
        </Slider>
      </Card.Body>
     
    </Card>
            </div>
        )
    }
   
}

export default Quotes
