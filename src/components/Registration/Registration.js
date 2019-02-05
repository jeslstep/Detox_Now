import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';


class Registration extends Component {


  render() {
    return (
      <div>
        <center>
          <Button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register as a User
          </Button>
          <br/>
           <Button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_DETOX_MODE'})}}
          >
            Register as a Detox Center 
          </Button>
        </center>
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

export default connect(mapStateToProps)(Registration);

