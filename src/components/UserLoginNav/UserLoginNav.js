import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './UserLoginNav.css';



const UserLoginNav = (props) => (
  <div className="nav">
   {props.user.id && (
     <div>
        <div>
          <LogOutButton className="nav-right"/>
          </div>
      <div className="center">
        <>
           <div className="center" >
              Welcome, { props.user.username }!
            {/* Your ID is: {props.user.id} */}
          </div>
        </>
    </div>
    </div>
     )}
  </div>
);

// get user info from state
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(UserLoginNav);
