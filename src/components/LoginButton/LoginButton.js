import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const style = {
  color: '#ffffff',
  backgroundColor: '#000000',
};


// link to login page
const MyLink = props => < Link to = "/login" { ...props
}
/>

const LoginButton = (props) => (
  <div className="buttonMargins">
    <center>
      <Button 
        className="Button"
        size="large" 
        variant="contained" 
        style={style} 
        component={MyLink}>
        
      Login
      </Button>
   </center>
  </div>
);

export default LoginButton;
