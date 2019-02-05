import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// link to login
const MyLink = props => < Link to = "/login" { ...props
}
/>

const LoginButton = (props) => (
  <div>
    <center>
      <Button 
        size="large" 
        variant="contained" 
        color="primary"  
        component={MyLink}>
      Login
      </Button>
   </center>
  </div>
);

export default LoginButton;
