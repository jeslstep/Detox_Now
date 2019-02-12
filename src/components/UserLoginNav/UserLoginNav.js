import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import './UserLoginNav.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
    menuButton2: {
      marginRight: -12,
      marginLeft: 20,
    },
};

const style = {
    root: {
        color: '#ffffff',
        backgroundColor: '#16233c',
        width: 100,
        margin: 8, 
    },
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000000',
    },
  },
});



function UserLoginNav(props) {
 const { classes } = props;
 
 return (
    <MuiThemeProvider theme={theme}>
  <div>
   {props.user.id && (
        <>
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.menuButton}>
                Welcome, { props.user.username }! 
            </Typography>
              <Button
              size="small"
              // style={style.root}
              onClick={() => props.dispatch({ type: 'LOGOUT' })}
            >
              Log Out
            </Button>
         </Toolbar>
      
         </AppBar>
        </>
     )}
  </div>
 </MuiThemeProvider>
 )
};

// get user info from state
const mapStateToProps = state => ({
  user: state.user,
});

UserLoginNav.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(connect(mapStateToProps)(UserLoginNav));
