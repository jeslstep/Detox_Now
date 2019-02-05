import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// link to home
const MyLink = props => < Link to = "/home" { ...props
}
/>
// link to DetoxNowDefault
const MyLink2 = props => < Link to = "/detoxnowdefault" { ...props
}
/>



const AllDetoxCentersNav = (props) => (
  <div className="nav">
    <div className="dextoxnow">
      <Button 
        size="large" 
        variant="contained" 
        color="secondary" 
        component={MyLink2}  
      >
      Detox Now
      </Button>
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
  </div>
);

export default AllDetoxCentersNav;
