import React, { Component } from 'react';
import {connect} from 'react-redux';
import dtnow_skline_mobile from './dtnow_skline_mobile.svg';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';




// link to all detox center map and detox now button
const MyLink = props => < Link to = "/alldetoxcentersmap" {
    ...props
}
/>

// link to registration for the user and the provider
const MyLink1 = props => < Link to = "/registration" {
    ...props
}
/>

// link to for the user and the provider login page
const MyLink2 = props => < Link to = "/login" {
    ...props
}
/>

const style = {
    root: {
        color: '#ffffff',
        backgroundColor: '#16233c',
        width: 140,
        margin: 8, 
    },
    root1: {
        color: '#ffffff',
        backgroundColor: '#ce0019',
        margin: 8,
        width: 300,
    },
     root2: {
        color: '#aab1c0',
        backgroundColor: '#373d4b',
        margin: 8,
        width: 300,
    }
};



export class LandingPage extends Component {


  render() {
    return (
        <div>
            <section className="App-header">
            <center>
                <div>
                    {/* detox now logo accessed via firebase url */}
                    <img 
                        src="https://firebasestorage.googleapis.com/v0/b/detox-now.appspot.com/o/dtnow-red.png?alt=media&token=5c6c5842-1e82-478d-98ae-4b156d42442b" 
                        className="detoxlogo" 
                        height="auto" 
                        width="300" 
                        alt="logo" />
                </div>
                </center>
                <div>
                    {/* city skylinee outline image in current directory */}
                    <img 
                    src={dtnow_skline_mobile} 
                    alt="city outline"/>
                </div>
        </section>
        <section className="grayBackground">
        <section>
        <section>
          
            <center>
                <div className="container">
                 <div  className="mission" >
                <p>
                    It is difficult to find available beds at detox centers and the location of person calling or messaging
                    for help getting to a detox center.DetoxNow helps ameliorate these problems.
                </p>
                 </div>
                 </div>
            </center>
        </section>
        <section>
            <center>
            <div className="container">
                <Button 
                    className="alignLeft"
                    size="large"
                    style={style.root}
                    component={MyLink2}
                    >
                Login
                </Button>
                <Button 
                    className="alignRight"
                    size="large"
                    style={style.root}
                    component={MyLink1}>
                Register
                </Button>
            </div>
            </center>
                <div>
                <Button 
                    size="large"
                    fullWidth={true}
                    style={style.root1}
                    component={MyLink}> 
                Continue As Guest
                </Button>
            </div>
            <div>
                <Button 
                    size="large"
                    fullWidth={true}
                    style={style.root2}
                      component={MyLink2}
                    >
                Provider Login 
                </Button>
               </div>
        </section>
  
        </section>
      
        </section>
        </div>
  
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
}); 
export default connect(mapReduxStateToProps)(LandingPage);
