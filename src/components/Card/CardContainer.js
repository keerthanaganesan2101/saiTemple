import React from 'react';
import {Card} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const CardContainer = props =>  {
    return (
        <div  id='Events' style={{marginBottom:'10px'}}>
           <Card className={props.screen} >
  <Card.Header style={{backgroundColor:'#EE4E34',color:'white'}}> {props.title}
 
      <NavLink to={props.link}
      style={{float:'right',fontSize:'15px',background:'#fea572',color:'white',padding:'5px',borderRadius:'3px'}}>
      Read More
      </NavLink>
  </Card.Header>
  <Card.Body style={{overflow:'scroll'}}>
    <Card.Text>
    {props.children}


    </Card.Text>
  
   
  </Card.Body>
</Card>
        </div>
    )
}

export default CardContainer
