import React from 'react';
import classes from './Home.module.css';
import Photos from '../photos/Photos';
import Quotes from '../Quotes/Quotes';
import DemoCarosel from '../Carosel/DemoCarosel';
import Thoughts from '../Thoughts/Thoughts';
import Event from '../Event/Event';
import Contact from '../contact/Contact';
import Write from '../write/Write';
const  Home = props => {




    return (
            <div className={classes.screen}>
                <div className={classes.carosolContainer}>
                <DemoCarosel/>
                </div>
                <div className={classes.aboutEventContainer}>
                    <div className={classes.aboutContainer}>
                    <Thoughts/>
                    </div>
                    <div className={classes.eventContainer}>
                   <Event/>
                    </div>
                </div>
                <div className={classes.quoteContainer}>
                    <Quotes/>
                </div>
                <div id='Photos and Videos' className={classes.photoContainer} style={{background:'#fea572'}}>
                    <h1 style={{textAlign:'center',color:'white',fontSize:'2.5vw',marginTop:'20px',fontFamily:'Source Sans Pro'}}>Photos and Videos</h1>
                    <hr style={{color: 'white',
    backgroundColor: 'grey',
    width:'50%',
    borderColor : 'whitesmoke'}}/>
                    <Photos/>
                </div>
                <div style={{background:'#DF5301'}}>
                <h1 style={{textAlign:'center',color:'white',fontSize:'2.5vw',marginTop:'20px',fontFamily:'Source Sans Pro'}}>Prayer request!</h1>
                <hr style={{color: 'white',
    backgroundColor: 'grey',
    width:'50%',
    borderColor : 'whitesmoke'}}/>
                    <Write/>
                </div>
                <div id='Contact Us' className={classes.contactCotainer} style={{background:'#DF5301'}}>
                <h1 style={{textAlign:'center',color:'white',fontSize:'2.5vw',marginTop:'20px',fontFamily:'Source Sans Pro'}}>Contact Us!</h1>
                <hr style={{color: 'white',
    backgroundColor: 'grey',
    width:'50%',
    borderColor : 'whitesmoke'}}/>
                    <Contact/>
                </div>
              
            </div>
    
    )
}



export default Home;
