import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const style = {
    root: {
        color: '#ffffff',
        backgroundColor: '#16233c',
        width: 100,
        margin: 8, 
    },
};

const LogOutButton = props => (
  <Button
    size="small"
    style={style.root}
    onClick={() => props.dispatch({ type: 'LOGOUT' })}
  >
    Log Out
  </Button>
);


const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(LogOutButton);
