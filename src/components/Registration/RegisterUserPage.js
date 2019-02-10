import React, { Component } from 'react';
import {connect} from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import dtnow_skline_mobile from '../LandingPage/dtnow_skline_mobile.svg';
import UserTextFields from './UserTextFields';


// material ui style override 
const style = {
  root: {
    color: '#ffffff',
    backgroundColor: '#16233c',
    margin: 8,
    width: 300,
  },
};

class RegisterPage extends Component {

  // stores user input values
  state = {
    username: '',
    password: '',
    clearance_level: 1,
    number: 0
  };

    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.user !== prevProps.user) {
        this.props.history.push('/home');
      }
    }

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password&& this.state.number) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          clearance_level: this.state.clearance_level,
          number: this.state.number
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } 

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
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
          <h1 className="whitetext">Register</h1>
          {/* <div>
            <InputLabel htmlFor="username"></InputLabel>
              <TextField
                id="username-input"
                label = "username"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
          </div>
          <div>
            <InputLabel htmlFor="password"></InputLabel>
              <TextField
                id="password-input"
                label = "password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
          </div> */}
             <UserTextFields 
              handleInputChangeFor = { this.handleInputChangeFor }
              state = { this.state }
            />
            <br/>
          <div>
            <Button
              size="large"
              style={style.root}
              onClick={this.registerUser}
            >
            Register and Continue
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

export default connect(mapStateToProps)(RegisterPage);

