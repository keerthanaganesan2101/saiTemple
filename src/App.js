import React from 'react';
import './App.css';
// import Library from './container/Library';
import Layout from './hoc/Layout/Layout';
import Home from './Container/Home/Home';
import About from './Container/About/About';
import Donate from './Container/Donate/Donate';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import EventMain from './Container/Event/EventMain';
import OtherServices from './Container/Event/OtherEvents/OtherServices';
import Acknowledgement from './Container/ack/Acknowledgement';
import {Helmet} from 'react-helmet'

class App extends React.Component {


  render(){


    let routes = (
      <Switch>
        <Route path="/About Us"   component={About} />
        <Route path="/Events"  component={EventMain} />
        <Route path="/Donate"  component={Donate} />
        <Route path="/Other Services"  component={OtherServices} />
        <Route path='/Acknowledgement' component={Acknowledgement} />
        <Route exact path="/"  component={Home} />
        <Redirect to="/" />
      </Switch>
    );
    return (
      <Layout>
         <Helmet>
         
           <title>Sri Sowbhakya Sai Temple</title>
              
          
           <style>{'body { background-color: #FCEDDA; }'}</style>
                
            </Helmet>
      {routes}
      </Layout>
      );
  }
 
}

export default withRouter(App);
