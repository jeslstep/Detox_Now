import React, { Component } from 'react';
import {connect} from 'react-redux';
import AllDetoxCentersMap from '../AllDetoxCentersMap/AllDetoxCentersMap';
import LoginButton from '../LoginButton/LoginButton';
import DetoxNowButton from '../DetoxNowButton/DetoxNowButton';


export class LandingPage extends Component {

 


  render() {
    return (
        <div>
            <center>
            <img src="https://firebasestorage.googleapis.com/v0/b/detox-now.appspot.com/o/dtnow-red.png?alt=media&token=5c6c5842-1e82-478d-98ae-4b156d42442b" 
            alt="Detox Now" height="auto" width="350"/>
            </center>
            <AllDetoxCentersMap/>
            <DetoxNowButton />
            <LoginButton/>
        </div>
  
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
}); 
export default connect(mapReduxStateToProps)(LandingPage);
