import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './UserLoginNav.css';



const UserLoginNav = (props) => (
  <div>
   {props.user.id && (
        <>
      <section>
        <div className="welcome">
        <h1>Welcome, { props.user.username }!</h1> 
        </div>
        <div className="logout">
          <LogOutButton  />
        </div>
        </section>
        </>
     )}
  </div>
);

// get user info from state
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(UserLoginNav);
