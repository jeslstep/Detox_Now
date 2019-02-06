import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const style = {
  color: '#ffffff',
  backgroundColor: '#000000',
};


// link to login page
const MyLink = props => < Link to = "/alldetoxcentersmap" { ...props
}
/>

const BackButton = (props) => (
  <div>
    <center>
      <Button 
        className="Button"
        size="large" 
        variant="contained" 
        style={style} 
        component={MyLink}>
        
      Back
      </Button>
   </center>
  </div>
);

export default BackButton;
