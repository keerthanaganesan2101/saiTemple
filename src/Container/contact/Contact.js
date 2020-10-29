import React from 'react'
import classes from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Social from '../../components/social/Social';
import { faMapMarkerAlt,faEnvelope,faPhoneAlt } from '@fortawesome/free-solid-svg-icons'


const Contact = props =>  {
    return (
        <div style={{background:'#DF5301'}} className={classes.screen}>
                
            <div className={classes.contact}>
               
                <div className={classes.sameLine}>
                    <FontAwesomeIcon icon={faMapMarkerAlt}  />
                    <h5 href="https://maps.app.goo.gl/pqEsCqF6djPQm3Ck8" style={{marginLeft:'10px',color:'white'}}>Sri Sai Sannithanam Adayathmika Kendra - Kandamangalam, Budalur Taluk, Thanjavur Dist.</h5>
                </div>
                <div className={classes.sameLine}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h5 style={{marginLeft:'10px',color:'white'}}>mangalanibhavanthu@gmail.com</h5>
                </div>
                <div className={classes.sameLine}>
                   
                    <FontAwesomeIcon icon={faPhoneAlt} />
                    <h5 style={{marginLeft:'10px'}}>90035 08493</h5>
                </div>
                
                
               
                <div className={classes.map}>
                <iframe width="50%" title='map' height="40%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.59005509963!2d78.97674191480138!3d10.842651092276625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaeb5adb592e57%3A0x74d5917c433c75ba!2sSai%20bhabha!5e0!3m2!1sen!2sin!4v1603111770105!5m2!1sen!2sin"  frameBorder="0" scrolling="no" ></iframe>

                </div>
                
                <div className={classes.social}>

                <Social/>
            </div>
               
            </div>
           
        </div>
    )
}

export default Contact
