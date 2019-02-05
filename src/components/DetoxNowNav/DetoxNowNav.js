import React from 'react';
import { Link } from 'react-router-dom';
import './DetoxNowNav';
import Button from '@material-ui/core/Button';


// link to DetoxNowDefault
const MyLink = props => < Link to = "/home" { ...props
}
/>

// link to contacts page in user login 
const MyLink4 = props => < Link to = "/about" { ...props
}
/>


const DetoxNowNav = (props) => (
  <div className="nav">
       <div className="dextoxnow">
      <div className="dextoxnow">
      <Button 
        size="medium" 
        variant="contained" 
        color="primary"  
        component={MyLink}>
      Login / Register
      </Button>
      </div>
        </div>
        <div className="dextoxnow">
            <Button 
                variant = "outlined"
                component={MyLink4}
                size="large" 
                color="secondary">
            About
            </Button>
      </div>
  </div>
);


export default DetoxNowNav;
