import React from 'react';
import {Button,InputGroup,FormControl} from 'react-bootstrap';
import classes from './Write.module.css';


const Write = props =>  {
    return (
        <div className={classes.flex} style={{backgroundColor:'#DF5301',fontFamily:'Source Sans Pro'}} >
          <div className={classes.input} style={{display:'flex',flexDirection:'column'}}>
          <InputGroup className="mb-3" >
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
      </InputGroup>

       <textarea className={classes.textarea} rows="6" cols="50" />

          </div>
           
           
   <div className={classes.buttonContainer}>
   <Button className={classes.button}  variant="primary">Send</Button>
   </div>

   
        </div>
    )
}

export default Write
