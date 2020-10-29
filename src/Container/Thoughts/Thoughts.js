import React from 'react';
import CardContainer from '../../components/Card/CardContainer';
import classes from './Thoughts.module.css';

function Thoughts() {
    return (
        <div id='About Us' >
            <CardContainer title='About Us' link='/About Us' screen={classes.screen}>
            <p style={{fontSize:'calc((.3em + .4vmin) + (.3em + .4vmax))',color:'brown'}}>  THE Organisation as Temple <b>“SRI SOWBHAKYA SAI TEMPLE”</b>  very rare and
Unique feature of his temple is both Babas, Sri Shirdi Sai, Sri Sathya Sai, decorating
the altar and blessing and gracing thousands of devotees far and wide.</p>
<p style={{fontSize:'calc((.3em + .4vmin) + (.3em + .4vmax))',color:'brown'}}>
<b> Managed by “SRI SATHYA SAI SANNITHANAM TRUST”-REGD </b>, a registered body,
fondly called by devotees as Sai Sannithanam.</p>
            </CardContainer>
            
        </div>
    )
}

export default Thoughts
