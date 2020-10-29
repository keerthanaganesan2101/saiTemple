import React from 'react';
import {NavLink} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';

class MenuItem extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        hover:false,
      }
    }
    
    handleHover(){
      this.setState({hover:!this.state.hover});
    }
    
    render(){
      const styles={
        container: {
          opacity: 0,
          animation: '1s appear forwards',
          animationDelay:this.props.delay,
        },
        menuItem:{
          fontFamily:`'Open Sans', sans-serif`,
          fontSize: '1.2rem',
          padding: '1rem 0',
          margin: '0 5%',
          cursor: 'pointer',
          color: this.state.hover? '#FFC0AD':'#fafafa',
          transition: 'color 0.2s ease-in-out',
          animation: '0.5s slideIn forwards',
          animationDelay:this.props.delay,
  
        },
        menu:{
          color: this.state.hover? '#FFC0AD':'#fafafa',
        },
        line: {
          width: '90%',
          height: '1px',
          background: '#FFC0AD',
          margin: '0 auto',
          animation: '0.5s shrink forwards',
          animationDelay:this.props.delay,
          
        }
      }
      return(
        <div style={styles.container}>
          <div  style={styles.menuItem} >
          {
            this.props.val === 'Photos and Videos' ? 
            <NavHashLink
            to="/#Photos and Videos"
            style={styles.menu}
            onMouseEnter={()=>{this.handleHover();}} 
            onMouseLeave={()=>{this.handleHover();}}
            onClick={this.props.onClick}
           
            // etc...
          >Photos and Videos</NavHashLink> : this.props.val === 'Contact Us' ?   <NavHashLink
          to="/#Contact Us"
          style={styles.menu}
          onMouseEnter={()=>{this.handleHover();}} 
          onMouseLeave={()=>{this.handleHover();}}
          onClick={this.props.onClick}
         
          // etc...
        >Contact Us</NavHashLink> :   <NavLink 
          to={`${this.props.val}`}
          //  href={`#${this.props.val}`}
           style={styles.menu}
            onMouseEnter={()=>{this.handleHover();}} 
            onMouseLeave={()=>{this.handleHover();}}
            onClick={this.props.onClick}
          >
            {this.props.children}  
            </NavLink>
            }
          
           
         
          
         
          </div>
          
        <div style={styles.line}/>
      </div>  
      )
    }
  }
  
  export default MenuItem;