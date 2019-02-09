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
        backgroundColor: '#18233a',
        width: 140,
        margin: 8, 
    },
    root1: {
        color: '#ffffff',
        backgroundColor: '#bd2726',
        margin: 8,
        width: 300,
    },
     root2: {
        color: '#ffffff',
        backgroundColor: '#25272d',
        margin: 8,
        width: 300,
    }
};



export class LandingPage extends Component {


  render() {
    return (
        <div>
        <section className="App-header">
          <img src="https://firebasestorage.googleapis.com/v0/b/detox-now.appspot.com/o/dtnow-red.png?alt=media&token=5c6c5842-1e82-478d-98ae-4b156d42442b" 
            className="detoxlogo" height="auto" width="250" alt="city outline" />
          <img src={dtnow_skline_mobile} className="App_dtnow_mobile" alt="city outline" />
        </section>
        <section>
        
            <center>
                 <div  className="mission" >
                <p>
                    It is difficult to find available beds at detox centers and the location of person calling or messaging
                    for help getting to a detox center.DetoxNow helps ameliorate these problems.
                </p>
                 </div>
            </center>
        </section>
        <section>
            <center>
            <div className="container">
                <Button 
                    className="alignLeft"
                    size="large"
                    style={style.root}>
                Login
                </Button>
                <Button 
                    className="alignRight"
                    size="large"
                    style={style.root}>
                Register
                </Button>
            </div>
            </center>
                <Button 
                    size="large"
                    fullWidth={true}
                    style={style.root1}
                    component={MyLink}> 
                Continue
                </Button>
           
                <Button 
                    size="large"
                    fullWidth={true}
                    style={style.root2}>
                Provider 
                </Button>
               
        </section>
        </div>
  
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
}); 
export default connect(mapReduxStateToProps)(LandingPage);
