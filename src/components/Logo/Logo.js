import React, { Component } from 'react';
import {connect} from 'react-redux';




export class Logo extends Component {

 


  render() {
    return (
        <div className= "opacity" >
        <center className="logo">
            <img src="https://firebasestorage.googleapis.com/v0/b/detox-now.appspot.com/o/dtnow-red.png?alt=media&token=5c6c5842-1e82-478d-98ae-4b156d42442b" 
            alt="Detox Now" height="auto" width="370"/>
        </center>
        </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
}); 
export default connect(mapReduxStateToProps)(Logo);
