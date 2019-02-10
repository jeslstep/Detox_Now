import React, { Component } from 'react';
import {connect} from 'react-redux';
import DetoxCenterTextFields from './DetoxCenterTextFields';
import { Button } from '@material-ui/core';
import dtnow_skline_mobile from '../LandingPage/dtnow_skline_mobile.svg';


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

  // stores input values 
  state = {
    username: '',
    password: '',
    clearance_level: 2,
    detox_center_name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    total_bed_count: 0
  };

  // resgisters a detox center
  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password && this.state.detox_center_name && this.state.address && this.state.city &&
      this.state.state && this.state.zip && this.state.total_bed_count) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          clearance_level: this.state.clearance_level,
          detox_center_name: this.state.detox_center_name,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip,
          total_bed_count: this.state.total_bed_count
        },
      });
    }  else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
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
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
          <h1 className="whitetext">Register</h1>
            <DetoxCenterTextFields 
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

