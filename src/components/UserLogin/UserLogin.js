import React, { Component } from 'react';
import {connect} from 'react-redux';
import UserLoginNav from '../UserLoginNav/UserLoginNav';
import SMSForm from '../SMSForm/SMSForm';



// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'


export class UserLogin extends Component {

 
  render() {
    return (
      <div className="background">
        <UserLoginNav />
        <SMSForm />
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(UserLogin);
