import React, { Component } from 'react';
import {connect} from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import { TextField } from '@material-ui/core';
import BackButton from '../BackButton/BackButton';

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
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        < form className = "form" onSubmit={this.registerUser}>
          <h1>Register as a Detox Center</h1>
            <div>
          </div>
          <div>
            <InputLabel htmlFor="username"></InputLabel>
              <TextField
                id="username-input"
                label = "Username"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
          </div>
          <div>
            < InputLabel htmlFor = "password"></InputLabel> 
              <TextField
                id="password-input"
                label = "Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
          </div>
            <div>
            <InputLabel htmlFor="detox_center_name"></InputLabel>
              <TextField
                id = "detox_center_name-input"
                label = "Detox Center Name"
                type="text"
                name="detox_center_name"
                value={this.state.detox_center_name}
                onChange={this.handleInputChangeFor('detox_center_name')}
              />
          </div>
           <div>
            <InputLabel htmlFor="address"></InputLabel>
              <TextField
                id="address-input"
                label = "Address"
                type="address"
                name="address"
                value={this.state.address}
                onChange={this.handleInputChangeFor('address')}
              />
          </div>
          <div>
            <small>ex. 107 chesnut st NE</small>
          </div>
            <div>
            <InputLabel htmlFor="city"></InputLabel>
              <TextField
                id="city-input"
                label = "City"
                type="city"
                name="city"
                value={this.state.city}
                onChange={this.handleInputChangeFor('city')}
              />
          </div>
            <div>
            <InputLabel htmlFor="state"></InputLabel>
              <TextField
                id="state-input"
                label = "State"
                type="state"
                name="state"
                value={this.state.state}
                onChange={this.handleInputChangeFor('state')}
              />
          </div>
            <div>
            <InputLabel htmlFor="zip"></InputLabel>
              <TextField
                id="zip-input"
                label = "Zip"
                type="zip"
                name="zip"
                value={this.state.zip}
                onChange={this.handleInputChangeFor('zip')}
              />
          </div>
            <div>
            <InputLabel htmlFor="total_bed_count"></InputLabel>
              <TextField
                id="total_bed_count-input"
                label = "Total Bed Count"
                type = "total_bed_count"
                name = "total_bed_count"
                value={this.state.total_bed_count}
                onChange={this.handleInputChangeFor('total_bed_count')}
              />
          </div>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <BackButton/>
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

