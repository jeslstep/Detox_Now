import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './LoginPageNav.css';
import Button from '@material-ui/core/Button';


// link to DetoxNowDefault
const MyLink = props => < Link to = "/detoxnowdefault" { ...props
}
/>

// link to contacts page in user login 
const MyLink4 = props => < Link to = "/about" { ...props
}
/>

// link to contacts page in user login 
const MyLink3 = props => < Link to = "/detoxnowmap" { ...props
}
/>




const Nav = (props) => (
  <div className="nav">
       <div className="dextoxnow">
            <Button 
                size="large" 
                variant="contained" 
                color="secondary" 
                component={MyLink}>
            Detox Now
            </Button>
        </div>
           <div className="dextoxnow">
            <Button 
                variant = "outlined"
                component={MyLink3}
                size="large" 
                color="primary">
            Map of Detox Centers
            </Button>
      </div>
        <div className="dextoxnow">
            <Button 
                variant = "outlined"
                component={MyLink4}
                size="large" 
                color="secondary">
                Register
            </Button>
      </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
