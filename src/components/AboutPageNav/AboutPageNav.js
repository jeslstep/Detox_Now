import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPageNav.css';

// material ui
import Button from '@material-ui/core/Button';

// link to home
const MyLink = props => < Link to = "/home" { ...props
}
/>
// link to DetoxNowDefault
const MyLink2 = props => < Link to = "/detoxnowdefault" { ...props
}
/>

// link to contacts page in user login 
const MyLink3 = props => < Link to = "/detoxnowmap" { ...props
}
/>

const AboutPageNav = (props) => (
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
        size="medium" 
        variant="contained" 
        color="primary"  
        component={MyLink}>
      Login / Register
      </Button>
      </div>
  </div>
);



export default AboutPageNav;
