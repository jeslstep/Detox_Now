import React, { Component } from 'react';
import {connect} from 'react-redux';
import dtnow_skline_mobile from './dtnow_skline_mobile.svg';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

// link to login page
const MyLink = props => < Link to = "/alldetoxcentersmap" {
    ...props
}
/>

const style = {
    root: {
        color: '#ffffff',
        backgroundColor: '#18233a'
    },
    root1: {
        color: '#ffffff',
        backgroundColor: '#bd2726'
    },
     root2: {
        color: '#ffffff',
        backgroundColor: '#25272d'
    }
};



export class LandingPage extends Component {


  render() {
    return (
        <div>
        <section className="App-header">
          <img src="https://firebasestorage.googleapis.com/v0/b/detox-now.appspot.com/o/dtnow-red.png?alt=media&token=5c6c5842-1e82-478d-98ae-4b156d42442b" 
            className="detoxlogo" alt="city outline" />
          <img src={dtnow_skline_mobile} className="App_dtnow_mobile" alt="city outline" />
        </section>
        <section className="mission">
            <center>
            <p>
                It is difficult to find available beds at detox centers and the location of person calling or messaging
                for help getting to a detox center.DetoxNow helps ameliorate these problems.
            </p>
            </center>
        </section>
        <section>
            <center>
                <div  className="loginRegister">
                <Button 
                    size="large" 
                    variant="contained" 
                    style={style.root}>
                Login
                </Button>
                </div>
                 <div  className="loginRegister">
                <Button 
                    size="large" 
                    variant="contained" 
                    style={style.root}>
                Register
                </Button>
                </div>
                <div className="guestProvider">
                <Button 
                    size="large" 
                    variant="contained" 
                    style={style.root1}
                    component={MyLink}> 
                Continue as Guest
                </Button>
                </div>
                <div className="guestProvider">
                <Button 
                    size="large" 
                    variant="contained" 
                    style={style.root2}>
                Provider Login
                </Button>
                </div>
            </center>
        </section>
           
        </div>
  
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
}); 
export default connect(mapReduxStateToProps)(LandingPage);
