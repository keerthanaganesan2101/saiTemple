import React from 'react';
import classes from './Event.module.css';

import CardContainer from '../../components/Card/CardContainer';

function Event() {
    return (
        <div  id='Events'>
          <CardContainer title='Events' link='/Events' screen={classes.screen}>
          <div  className={classes.marque}>
      <li className={classes.li}>26.10.2020 <br/>
      &nbsp;&nbsp;&nbsp;&nbsp; Monday <br/>

Baba Mahasamadhi Day, <br/>

Special feature of this event is, <br/>

All Devotees....Male, Female, Children above 6 years,
Can take part in the Personal Abhishegam of Babas idol, the Panchaloka Mooerthy....by themselves do Abhishegam with Milk.
( Last year nearly 500 Devotees took part on this offering).
This gives sense of Great satisfaction to all participating Devotees. <br/>

Afterwords Regula Abhishegam,  Archana, Maha Arathi ....finally... <br/>
Annadhanam... <br/>

Sairam </li> 

         </div>
   
          </CardContainer>
          
    
        </div>
    )
}

export default Event
