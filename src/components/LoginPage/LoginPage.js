import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import LoginPageNav from '../LoginPageNav/LoginPageNav'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    clearance_level: 0,
  };

    // run these as soon as possible 
    componentDidMount() {
      // get destination 
      this.getDetoxWithMostBedsAvailable();
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
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
      <div>
        <LoginPageNav />
      </div>
      <div>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <form className="form" onSubmit={this.login}>
          <h1>Login</h1>
          <div>
            <InputLabel htmlFor="username"></InputLabel>
              <TextField
                id="username-input"
                label = "Username"
                type = "text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
                margin="normal"
              />
          </div>
          <div>
            <InputLabel htmlFor="password"></InputLabel>
              <TextField
                  id="outlined-password-input"
                  label="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor('password')}
                  type="password"
                  margin="normal"
                />
          </div>
          <div>
            <input
              className="log-in"
              type="submit"
              name="submit"
              value="Log In"
            />
          </div>
        </form>
      </div>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
