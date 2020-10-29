import React, { Component} from 'react';
import Slider from "react-slick";
import Modal from '../../components/UI/Modal/Modal';
import Mandabam from '../../components/photos/Mandabam.jpg';
import Sai from '../../components/photos/Sai.jpg';
import Temple from '../../components/photos/Temple.jpg';
import PhotoViewer from './PhotoViewer';

function SampleNextArrow(props) {

    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,  }}
        onClick={onClick}
      />
    );
  }
export default class Photos extends Component {
  state = {
    continue:false,
    url:''
  }

  photoHandler = (url) => {
    this.setState({continue:true,url:url})
  }

  cancel = () => {
    this.setState({continue:false})
  }
    render() {
      
        const settings = {
            dots: true,
            nextArrow: <SampleNextArrow  />,
            prevArrow: <SamplePrevArrow />,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
          };
        return (
            <div style={{margin:'5%',marginTop:'2%'}}>
                 <Slider {...settings}>
          <div onClick={() => this.photoHandler(Mandabam)} >
          <img src={Mandabam} alt="saiMandabam" style={{width:'90%',height:'90%',marginLeft:'5%',overflow:'hidden'}} />
          </div>
          <div onClick={() => this.photoHandler(Sai)}>
          <img src={Sai} alt="saiimg"  style={{width:'90%',height:'90%',marginLeft:'5%',overflow:'hidden'}} />
          </div>
          <div onClick={() => this.photoHandler(Temple)}>
          <img src={Temple} alt="saitemple"  style={{width:'90%',height:'90%',marginLeft:'5%'}} />
          </div>
          <div onClick={() => this.photoHandler(Mandabam)}>
          <img src={Mandabam} alt="saimandabam2"  style={{width:'90%',height:'90%',marginLeft:'5%'}} />
          </div>
          <div onClick={() => this.photoHandler(Sai)}>
          <img src={Sai} alt="saiimage"  style={{width:'90%',height:'90%',marginLeft:'5%'}} />
          </div>
          <div onClick={() => this.photoHandler(Temple)}>
          <img src={Temple} alt="saitemple2"  style={{width:'90%',height:'90%',marginLeft:'5%'}} />
          </div>
          
        </Slider>
        <Modal show={this.state.continue} modalClosed={this.cancel}>
             <PhotoViewer imageUrl ={this.state.url}/>
              </Modal>  
            </div>
        )
    }
}
