import React, { Component } from 'react';
import saiAudio from '../../components/Header/assets/Audio/saiaudio.mp3';
import {withRouter} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import classes from './Layout.module.css';
import { NavHashLink } from 'react-router-hash-link';
import MenuItem from '../../components/Header/components/MenuItem';
import Menu from '../../components/Header/components/Menu';
import saiLeft from '../../components/Header/assets/saiLeft.png';
import saiHeader from '../../components/Header/assets/saiheader.png';
import saiRight from '../../components/Header/assets/saiRight.png';
import MenuButton from '../../components/Header/components/MenuButton';



class Layout extends Component {


    state = {
        showSideDrawer: false
    }
    constructor(props){
        super(props);
        this.state={
          menuOpen:false,
        }
      }
      
      handleMenuClick() {
        this.setState({menuOpen:!this.state.menuOpen});
      }
      
      handleLinkClick() {
        this.setState({menuOpen: false});
       console.log(this.props.location)
        
      }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        const styles= 
        {
          container:{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: '99',
            opacity: 0.9,
            display:'flex',
            alignItems:'center',
            background: '#EE4E34',
            width: '100%',
            height:'110px',
            color: 'white',
            fontFamily:  'Source Sans Pro'
          },
          logo: {
            display:'flex',
            flexDirection: 'column',
            margin: '0 auto',
            fontSize:'20px',
          },
          body: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            filter: this.state.menuOpen ? 'blur(2px)':null,
            transition: 'filter 0.5s ease',
          },
        }
        let menu = ['Home','About Us','Events','Pujas & Activities','Photos and Videos','Contact Us','Acknowledgement','Donate']
        let menuItems;

menuItems = menu.map((val,index)=>{
  return (
    
    <MenuItem 
      key={index} 
      val={val === 'Pujas & Activities' ? 'Other Services' : val}
      delay={`${index * 0.1}s`}
      onClick={(val)=>{this.handleLinkClick(val);}}>{val}</MenuItem>)
})


      
      
      return(
        <div>
          <div style={styles.container}>
            <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
            <div style={styles.logo}>
              <div>
              <img src={saiLeft} alt='logo-left' className={classes.logoLeft} />
              <h5 className={classes.title} >Sri Sowbhakya Sai Temple</h5>
              <img src={saiRight} alt='logo-right' className={classes.logoLeft} />
              </div>
              <div>
                <h6 className={classes.subHeader} >SRI SATHYA SAI SANNITHANAM (TRUST) SAI ADYATMIKA KENDRA</h6>
              </div>
              </div>
              
          </div>
         
          <Menu open={this.state.menuOpen}>
            {menuItems}
           
            <img src={saiHeader} alt='sai-menu' className={classes.image} />
          </Menu>
         
          
          <div className={classes.Content}>
           
          <div className={classes.navbar}>
        <NavLink activeClassName={classes.active} exact={true} className={classes.nav} to='/'>
            Home
        </NavLink>
        <NavLink activeClassName={classes.active} className={classes.nav} to='/About Us'>
            About Us
        </NavLink>
        <NavLink activeClassName={classes.active} className={classes.nav} to='/Events'>
            Events
        </NavLink> 
        <NavLink activeClassName={classes.active} className={classes.nav} to='/Other Services'>
            Pujas & Activities
        </NavLink>
         <NavLink activeClassName={classes.active} className={classes.nav} to='/Acknowledgement'>
            Acknowledgement
        </NavLink> 
        <NavLink activeClassName={classes.active} className={classes.nav} to='/Donate'>
            Donate
        </NavLink>
        <NavHashLink
  to="/#Photos and Videos"
  activeClassName={classes.active}
  className={classes.nav}
 
  // etc...
>Photos and Videos</NavHashLink>
        <NavHashLink
  to="/#Contact Us"
  activeClassName={classes.active}
  className={classes.nav}
 
  // etc...
>Contact Us</NavHashLink>
       
            </div>
           
         
              {this.props.children}
          </div>
          <audio id="audioplayer" autoplay  loop='loop' preload='auto'>
          <source src={saiAudio} type="audio/mpeg" />
          This text displays if the audio tag isn't supported.
               </audio>
        </div>
      )
    }
        
}



export default  withRouter(Layout);