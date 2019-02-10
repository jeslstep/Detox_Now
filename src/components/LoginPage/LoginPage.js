import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import dtnow_skline_mobile from '../LandingPage/dtnow_skline_mobile.svg';
import LoginTextFields from './LoginTextFields';


// material ui style override 
const style = {
  root: {
    color: '#ffffff',
    backgroundColor: '#16233c',
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

// link to registration for the user and the provider
const MyLink1 = props => < Link to = "/registration" {
  ...props
}
/>

class LoginPage extends Component {
  
  // store username, password, user level
  state = {
    username: '',
    password: '',
    clearance_level: 0,
  };

  // run these as soon as possible 
  componentDidMount() {
      // get detox center with most amount of beds available 
      this.getDetoxWithMostBedsAvailable();
  }

  // take the user to their home page when logged in
  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.props.history.push('/home');
    }
  }

  // getDetoxWithMostBedsAvailable dispatches a call to find the detox with the most beds available
  getDetoxWithMostBedsAvailable = (event) => {
    this.props.dispatch({
      type: 'GET_DETOX_WITH_LOWEST_BED_COUNT'
    });
    this.getGeoLocation();
  }

   // captures users current location and sets coords to reduxstate
   getGeoLocation = () => {
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(
         (position) => {
           console.log('in getGeoLoaction', 'lat: ', position.coords.latitude, 'lng:', position.coords.longitude)
         this.props.dispatch({
           type: 'SET_CURRENT_LOCATION', payload: {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           }
         });
         console.log('found current location', 'lat:', position.coords.latitude,
           'lng:', position.coords.longitude );
         }
       )
     } else {
       console.log('Location services not supported by your browser');
       // try again
       this.getGeoLocation();
     }
   }

   // logs user in
   login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {

      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } 

  // sets input values into state
  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

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
                {/* warning message if login fails */}
                {this.props.errors.loginMessage && (
                  <h2
                    className="alert"
                    role="alert"
                  >
                    {this.props.errors.loginMessage}
                  </h2>
                )}
          <h1 className="whitetext">Login</h1>
            <LoginTextFields 
              handleInputChangeFor = { this.handleInputChangeFor }
              state = { this.state }
            />
            <br/>
            <div>
            <Button
              size="large"
              style={style.root}
              onClick = {
                this.login
              }
             >
            Login
            </Button>
            </div>
            <div>
               <Button
              size="large"
              style={style.root2}
              component={MyLink1}
             >
            Register
            </Button>
            </div>
      </section>

      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
  user: state.user
});

export default connect(mapStateToProps)(LoginPage);
