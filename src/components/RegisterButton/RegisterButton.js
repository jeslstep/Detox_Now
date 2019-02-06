import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const style = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

// link to Registration page
const MyLink = props => < Link to = "/registration" { ...props
}
/>

const RegisterButton = (props) => (
  <div className="buttonMargins">
    <center>
      <Button 
        className="Button"
        size="large" 
        variant="contained" 
        style={style} 
        component={MyLink}>
      Register
      </Button>
   </center>
  </div>
);

export default RegisterButton;
