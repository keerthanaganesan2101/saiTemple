import React from 'react';
import {Card} from 'react-bootstrap';

const AcknowledgementContent= props => {
    return (
        <div>
             <Card style={{width:'80%',margin:'auto',height:'80vh',overflow:'scroll'}}>
      <Card.Header style={{backgroundColor:'#EE4E34',color:'white'}}>{props.name}</Card.Header>
      
      <Card.Body style={{padding:'25px'}}>
     
        
          
         {props.children}
      </Card.Body>
    </Card>
        </div>
    )
}

export default AcknowledgementContent
