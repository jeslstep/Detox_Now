import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
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



// link to login page
const MyLink = props => < Link to = "/registeruser" {
  ...props
}
/>

// link to login page
const MyLink2 = props => < Link to = "/registerdetox" {
  ...props
}
/>

class Registration extends Component {


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
        <h1 className="whitetext">Register As</h1>
        <center>
          <Button
            size="large"
            style={style.root}
            component={MyLink}
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register as a User
          </Button>
             <div className="container">
                 <div  className="mission" >
          <p>When you register, you'll be able to send a meassage containing your phone number and exact location for ease of contact and pickup</p>
          </div>
          </div>
          <br/>
           <Button
            size="large"
            style={style.root}
            component={MyLink2}
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_DETOX_MODE'})}}
          >
            Register as a Detox Center 
          </Button>
             <div className="container">
                 <div  className="mission" >
          <p>When you register, you'll be able to update bed counts allowing for patients to find the detox center with the most beds available</p>
        </div>
        </div>
        </center>
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
});

export default connect(mapStateToProps)(Registration);

