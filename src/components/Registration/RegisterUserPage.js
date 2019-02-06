import React, { Component } from 'react';
import {connect} from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import { TextField } from '@material-ui/core';
import BackButton from '../BackButton/BackButton';


class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    clearance_level: 1
  };

    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.user !== prevProps.user) {
        this.props.history.push('/home');
      }
    }

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          clearance_level: this.state.clearance_level
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
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form className="form" onSubmit={this.registerUser}>
          <h1>Register as a User</h1>
          <div>
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

